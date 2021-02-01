// //const state = require('./teststate');

// class Product {
//   constructor() {
//     this.var = [];
//     this.part = [];
//     this.resetCode = '\\[\\e[0m\\]';
//     this.escCode = '\\e[';
//     this.hasStyle = true;
//   }
// }

// /**
//  * @description
//  * Builder. Create variable string and and prompt part string
//  */

// class BashPropmpBuilder {
//   constructor(prop) {
//     this.prop = prop;
//   }
//   getVariableName(namePart) {
//     return `${namePart}${this.prop.id}`;
//   }
//   checkStyle() {
//     if (this.prop.fg.colorId === 'RST' && this.prop.bg.colorId === 'RST') {
//       this._product.hasStyle = false;
//     }
//   }
// }
// /**
//  * @specific
//  * Builder. Create specific variable part
//  */
// class VarBuilder extends BashPropmpBuilder {
//   constructor(prop) {
//     super(prop);
//     this.reset();
//     super.checkStyle();
//   }
//   reset() {
//     this._product = new Product();
//   }
//   setVarName() {
//     if (this._product.hasStyle) {
//       const name = super.getVariableName('VR');
//       this._product.var.push(`${name}="${this._product.escCode}`);
//     }
//   }
//   setColors() {
//     if (this._product.hasStyle) {
//       const fgcolor =
//         this.prop.fg.colorId !== 'RST' ? `38;05;${this.prop.fg.colorId};` : '';
//       const bgcolor =
//         this.prop.bg.colorId !== 'RST' ? `48;05;${this.prop.bg.colorId};` : '';
//       this._product.var.push(`${fgcolor}${bgcolor}m"`);
//     }
//   }
//   getPromptPart() {
//     return this._product.var;
//   }
// }
// /**
//  * @specific
//  * Builder. Create specific psone varible part
//  */

// class PsOneBuilder extends BashPropmpBuilder {
//   constructor(prop) {
//     super(prop);
//     this.reset();
//     super.checkStyle();
//   }
//   reset() {
//     this._product = new Product();
//   }
//   setDecoration() {
//     if (this._product.hasStyle) {
//       const varName = super.getVariableName('VR');
//       this._product.part.push(`\${${varName}}`);
//     }
//   }
//   setSequences() {
//     this._product.part.push(this.prop.code);
//   }
//   setRst() {
//     if (this._product.hasStyle) {
//       this._product.part.push('${RST}');
//     }
//   }
//   getPromptPart() {
//     return this._product.part;
//   }
// }
// /**
//  * @interface
//  * Builder interface
//  * @param {instanse} builder
//  */

// class Director {
//   constructor(builder) {
//     this._builder = builder;
//   }
//   createPsoneString() {
//     this._builder.setDecoration();
//     this._builder.setSequences();
//     this._builder.setRst();
//   }
//   createVariableString() {
//     this._builder.setVarName();
//     this._builder.setColors();
//   }
// }

// function client(prop) {
//   const builder = new PsOneBuilder(prop);
//   const director = new Director(builder);
//   const varbuilder = new VarBuilder(prop);
//   const vardirector = new Director(varbuilder);
//   director.createPsoneString();
//   vardirector.createVariableString();
//   return {
//     psonepart: builder.getPromptPart().join(''),
//     variable: varbuilder.getPromptPart().join(''),
//   };
// }

// class Document {
//   constructor(arr) {
//     this.arr = arr;
//     this._addShellSyntax();
//   }
//   createVariableList() {
//     this.varlist = this.arr
//       .flat()
//       .filter((e) => e.variable)
//       .map((e) => e.variable);
//   }
//   createPsoneLine() {
//     this.psoneline = this.arr.map((line) => {
//       return line
//         .map((linepart) => {
//           return linepart.psonepart;
//         })
//         .join('');
//     });
//   }
//   _addShellSyntax() {
//     if (!this.arr) {
//       throw new Error('Errrrrrrr');
//     }
//     if (this.arr.length > 1) {
//       const lastindex = this.arr.length - 1;
//       this.arr[0].unshift({ psonepart: 'PS1="' });
//       this.arr[lastindex].push({ psonepart: '"' });
//     } else if (this.arr.length === 1) {
//       this.arr[0].unshift({ psonepart: 'PS1="' });
//       this.arr[0].push({ psonepart: '"' });
//     }
//   }
//   getRusuilt() {
//     return {
//       variableList: this.varlist,
//       psonestring: this.psoneline,
//     };
//   }
// }

// function cmp(arr) {
//   const subres = arr.map((e) => {
//     return e.map((e) => client(e));
//   });
//   const doc = new Document(subres);
//   doc.createVariableList();
//   doc.createPsoneLine();
//   return doc.getRusuilt();
// }

// module.exports = cmp;

// const state = [
//   [
//     {
//       id: 1,
//       text: 'The hostname (short)',
//       sequences: 'LocalHost',
//       code: '\\h',
//       style: [{ code: 00 }],
//       bg: {
//         colorId: 'RST',
//         hexString: '#000000',
//         rgb: { r: 0, g: 0, b: 0 },
//         hsl: { h: 0, s: 0, l: 0 },
//         name: 'Black',
//       },
//       fg: {
//         colorId: 156,
//         hexString: '#afff87',
//         rgb: { r: 175, g: 255, b: 135 },
//         hsl: { h: 100, s: 100, l: 76 },
//         name: 'PaleGreen1',
//       },
//       type: 'SEQUENCES',
//     },
//     {
//       id: 2,
//       text: 'The base name of term',
//       sequences: 'ttys001',
//       code: '\\l',
//       style: [{ code: 00 }],
//       bg: {
//         colorId: 'RST',
//         hexString: '#000000',
//         rgb: { r: 0, g: 0, b: 0 },
//         hsl: { h: 0, s: 0, l: 0 },
//         name: 'Black',
//       },
//       fg: {
//         colorId: 'RST',
//         hexString: '#afff87',
//         rgb: { r: 175, g: 255, b: 135 },
//         hsl: { h: 100, s: 100, l: 76 },
//         name: 'PaleGreen1',
//       },
//       type: 'SEQUENCES',
//     },
//   ],
//   [
//     {
//       id: 1,
//       text: 'The hostname (short)',
//       sequences: 'LocalHost',
//       code: '\\h',
//       style: [{ code: 00 }],
//       bg: {
//         colorId: 'RST',
//         hexString: '#000000',
//         rgb: { r: 0, g: 0, b: 0 },
//         hsl: { h: 0, s: 0, l: 0 },
//         name: 'Black',
//       },
//       fg: {
//         colorId: 212,
//         hexString: '#ff87d7',
//         rgb: { r: 255, g: 135, b: 215 },
//         hsl: { h: 320, s: 100, l: 76 },
//         name: 'Orchid2',
//       },
//       type: 'SEQUENCES',
//     },
//   ],
// ];

// =============================================================================
/**
 * @abstract - abstract product
 * @method configurate(): void астрактный медот для создания части rc документа
 */
class PsOnePart {
  /**@abstract*/ configurate() {}
  getVaribaleName(id, lineid, varname) {
    return `${varname}${lineid}${id}`;
  }
}
/**
 * @description product
 * Класс создает список переменных которые используются в psone строке
 * Класс должен подифицировать переменную element
 */
class PsVariables extends PsOnePart {
  constructor(element) {
    super();
    this.element = element;
    this.result = [];
  }
  // Нужно убрать отсюда метод создания имени перменной
  setVaribleName() {
    const { id, lineid } = this.element;
    const variable = super.getVaribaleName(id, lineid, 'VR');
    this.result = [`${variable}\=`, ...this.result];
  }
  setEscCode() {
    this.result = ['"\\e[', ...this.result];
  }
  createComent() {}
  setDecoration() {
    if (this.element.style.length) {
      const decoration = this.element.style.map((e) => `${e.code}`);
      this.result = [...this.result, decoration];
    }
  }
  setBgColor() {
    if (this.element.bg.colorId !== 'RST') {
      const bgcolor = `48;05;${this.element.bg.colorId}`;
      this.result = [...this.result, bgcolor];
    }
  }
  setFgColor() {
    if (this.element.fg.colorId !== 'RST') {
      const fgcolor = `38;05;${this.element.fg.colorId}`;
      this.result = [...this.result, fgcolor];
    }
  }
  decorate() {
    this.setDecoration();
    this.setBgColor();
    this.setFgColor();
  }
  addSyntax() {
    this.result = this.result.flat().map((e, i, arr) => {
      const lastindex = arr.length - 1;
      const divider = i === lastindex ? 'm"' : ';';
      return `${e}${divider}`;
    });
    this.setEscCode();
    this.setVaribleName();
    this.createComent();
  }
  configurate() {
    if (this.element.isStyled) {
      this.decorate();
      this.addSyntax();
    }
    return this.result;
  }
}

/**
 * @description product
 * Класс создает часть документа формирует строку PS1
 */
class PsOnestring extends PsOnePart {
  constructor(element) {
    super();
    this.element = element;
    this.result = [];
  }
  setVaribale() {
    if (this.element.isStyled) {
      const { id, lineid } = this.element;
      const variable = super.getVaribaleName(id, lineid, 'VR');
      this.result = [`\$\{${variable}\}`, ...this.result, '${RST}'];
    }
  }
  setSecuences() {
    const sequences = this.element.code;
    this.result = [sequences];
  }
  configurate() {
    this.setSecuences();
    this.setVaribale();
    return this.result;
  }
}

class BashPromptFactory {
  constructor(element) {
    this.element = element;
  }
  createPsOneString() {
    return new PsOnestring(this.element);
  }
  createValiableList() {
    return new PsVariables(this.element);
  }
}

/**
 * @abstract - абстракция для файбрик перменных и psone strin
 */

class AbstractFactory {
  constructor(factory) {
    this.factory = factory;
  }
  configuratePsOne() {
    return {
      psonestring: this.factory.createPsOneString().configurate(),
      psonevariable: this.factory.createValiableList().configurate(),
    };
  }
}

class PsOneElement {
  constructor(element, lineIndex) {
    this.element = element;
    this.id = lineIndex;
    this._isStyled();
  }
  _isStyled() {
    const { bg, fg, style } = this.element;
    const isStyled = !!(
      style.length ||
      bg.colorId !== 'RST' ||
      fg.colorId !== 'RST'
    );
    this.element.lineid = this.id;
    this.element.isStyled = isStyled;
  }
  getElement() {
    return this.element;
  }
}

const FactoryMap = new Map([['bash', BashPromptFactory]]);

class RcDocument {
  constructor(psOneModel, currentShell) {
    this.variables = [];
    this.psoneline = [];
    this.shell = currentShell;
    this.model = psOneModel;
    this.psoneprefix = 'export PS1="';
    this.rst = 'RST="\\e[0m"';
  }
  _setFactory() {
    this.SpecificFactory = FactoryMap.get(this.shell);
  }
  _configurateParts(part, lineIndex) {
    part.forEach((e) => this._compose(e, lineIndex));
  }
  _compose(element, lineIndex) {
    const newElement = new PsOneElement(element, lineIndex).getElement();
    const subres = new AbstractFactory(new this.SpecificFactory(newElement));
    const psonestring = subres.configuratePsOne().psonestring.join('');
    const psonevariable = subres.configuratePsOne().psonevariable.join('');
    this.variables.push(psonevariable);
    this.psoneline[lineIndex].push(psonestring);
  }
  _createLines() {
    this.psoneline = this.model.map(() => []);
  }
  _createPsOneString() {
    const lastindex = this.model.length - 1;
    this.psonestring = this.psoneline.map((e, i) => {
      const start = i === 0 ? this.psoneprefix : '';
      const end = i === lastindex ? `"` : '';
      const line = e.join('');
      return `${start}${line}${end}`;
    });
  }
  getResult() {
    return { variableList: this.variables, psonestring: this.psonestring };
  }
  create() {
    this._setFactory();
    this._createLines();
    this.variables.push(this.rst);
    this.model.forEach((e, lineIndex) => this._configurateParts(e, lineIndex));
    this._createPsOneString();
  }
}

const client = (state) => {
  const doc = new RcDocument(state, 'bash');
  doc.create();
  return doc.getResult();
};
//console.log(client());

module.exports = client;

/**
 *@description - Сlient code. Called after request
 *@param psOneModel: Array[][]
 *@param selectedShell: string
 * Get shell name and model from request.
 * Find specific factory from Map by shell name.
 * Give each element from model to new Specific factory.
 */
// function Composer(selectedShell = 'bash') {
//   try {
//     if (!SpecificFactory) {
//       throw new Error('нет такой фабрики');
//     }
//     console.dir(SpecificFactory);
//     const f0 = new PsOneElement(state[0][0]).getElement();
//     console.dir(f1.configuratePsOne());
//   } catch (e) {
//     console.log(e.message);
//   }
// }

//=============================================================================
