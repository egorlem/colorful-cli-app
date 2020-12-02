const state = require('./teststate');
const RST = {
  clipBorardString: 'RST="\\[\\e[0m\\]"\t#test\n',
};
const GIT_BRANCH = {
  str1: 'parse_git_branch() {',
  srt2: `    git branch 2>/dev/null | sed -e '/^[^*]/d' -e 's/* \\(.*\\)/\\1/'`,
  srt3: '}',
};
const getDecorationCode = (code) => {
  if (!code) return '';
  return `${code};`;
};
const getColorCode = (pattern, code, bracket = '') => {
  if (code === 'RST') return '';
  return `${pattern}${code}${bracket}`;
};
const createStyleString = (bg, fg) => {
  const colorscode = ''.concat(
    getDecorationCode(''),
    getColorCode('48;05;', bg, ';'),
    getColorCode('38;05;', fg, 'm')
  );
  return colorscode;
};

const createStyleVariable = (i, lni, decor, colors) => {
  if (!colors) {
    return {
      varString: '',
      varName: '',
      syntax: [],
    };
  }
  const esc = '\\e';
  const varName = `ST${i}${lni}`;
  return {
    varString: `${varName}="\\[${esc}[${decor}${colors}\\]"`,
    varName: `\$\{${varName}\}`,
    varSyntax: [
      { text: varName, type: 'shVariable' },
      { text: `="\\[`, type: 'shString' },
      { text: esc, type: 'shSpecial' },
      { text: `[`, type: 'shString' },
      { text: decor, type: 'shString' },
      { text: colors, type: 'shString' },
      { text: '\\]', type: 'shString' },
    ],
  };
};

const createPsOneSting = (
  bg,
  fg,
  decor,
  type,
  seqcode = 'test',
  elIndex,
  lineIndex
) => {
  const styleString = createStyleString(bg, fg);
  const decorString = getDecorationCode(decor);
  const { varString, varName, varSyntax } = createStyleVariable(
    elIndex,
    lineIndex,
    decorString,
    styleString
  );
  const RST = styleString ? `\$\{RST\}` : '';
  return {
    varibale: {
      varString: varString,
      varSyntax: varSyntax,
    },
    psone: {
      psonePart: `${varName}${seqcode}${RST}`,
      psoneSyntax: [
        { text: '${', type: 'shPreProc' },
        { text: `ST${elIndex}${lineIndex}`, type: 'shVariable' },
        { text: '}', type: 'shPreProc' },
        { text: `${seqcode}`, type: 'shSpecial' },
        { text: '${', type: 'shPreProc' },
        { text: 'RST', type: 'shVariable' },
        { text: '}', type: 'shPreProc' },
      ],
    },
  };
};
// console.log(createPsOneSting());

const cmp2 = (arr) => {
  return arr.map((line, lineIndex) => {
    return line.map((elem, elIndex) => {
      return createPsOneSting(
        elem.bg.colorId,
        elem.fg.colorId,
        '',
        elem.type,
        elem.code,
        elIndex,
        lineIndex
      );
    });
  });
};

//const subres = cmp(state);

const cbres = (res) => {
  const psoneresstr = res.map((e, i, arr) => {
    let start = i === 0 ? 'PS1="' : '';
    let end = arr.length - 1 === i ? '"' : '';
    let line = e.map((e) => e.psone.psonePart).join('');
    return `${start}${line}${end}\n`;
  });
  const varibaleStr = res
    .flat()
    .map((e, i, arr) => {
      let varstr = e.varibale.varString;
      return `${varstr}\n`;
    })
    .filter((e) => e.length > 1);
  return [RST.clipBorardString, ...varibaleStr, '\n', ...psoneresstr];
};

// export const cmp = (arr) => {
//   const subres = cmp2(arr);
//   const pscbline = cbres(subres);
//   return {
//     res: subres,
//     pscbline: pscbline,
//   };
// };

const testStateSimple = {
  id: 1,
  text: 'The hostname (short)',
  sequences: 'LocalHost',
  code: '\\h',
  style: ['regular'],
  bg: {
    colorInfo: false,
    colorId: 'RST',
    hexString: '#000000',
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    name: 'Black',
  },
  fg: {
    colorId: 212,
    hexString: '#ff87d7',
    rgb: { r: 255, g: 135, b: 215 },
    hsl: { h: 320, s: 100, l: 76 },
    name: 'Orchid2',
  },
  type: 'SEQUENCES',
};

// PromptPart
class Document {}

class Product {
  constructor() {
    this.var = [];
    this.part = [];
    this.resetCode = '\\[\\e[0m\\]';
    this.escCode = '\\e[';
  }
}

class BashPropmpBuilder {
  constructor(prop) {
    this.prop = prop;
  }
  getVariableName(namePart) {
    return `${namePart}${this.prop.id}`;
  }
}

class /** @specific */ VarBuilder extends BashPropmpBuilder {
  constructor(prop) {
    super(prop);
    this.reset();
  }
  reset() {
    this._product = new Product();
  }
  setVarName() {
    const name = super.getVariableName('VR');
    this._product.var.push(`${name}=`);
  }
  setFgColor() {
    this._product.part.push(this.prop.fg.colorId);
  }
  setBgColor() {
    this._product.part.push(this.prop.bg.colorId);
  }
  getPromptPart() {
    return this._product.var;
  }
}

class /** @specific */ Builder extends BashPropmpBuilder {
  constructor(prop) {
    super(prop);
    this.reset();
  }
  reset() {
    this._product = new Product();
  }
  setDecoration() {
    const varName = super.getVariableName('VR');
    this._product.part.push(`\${${varName}}`);
  }
  setSequences() {
    this._product.part.push(this.prop.code);
  }
  getPromptPart() {
    return this._product.part;
  }
}
class Director {
  constructor(builder) {
    this._builder = builder;
  }
  createPsoneString() {
    this._builder.setDecoration();
    this._builder.setSequences();
  }
  createVariableString() {
    this._builder.setVarName();
  }
}

function client(prop) {
  const builder = new Builder(prop);
  const director = new Director(builder);
  const varbuilder = new VarBuilder(prop);
  const vardirector = new Director(varbuilder);
  director.createPsoneString();
  vardirector.createVariableString();
  return { 1: builder.getPromptPart(), 2: varbuilder.getPromptPart() };
}

console.log(client(testStateSimple));
