const state = require('./teststate');

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

class Product {
  constructor() {
    this.var = [];
    this.part = [];
    this.resetCode = '\\[\\e[0m\\]';
    this.escCode = '\\e[';
    this.hasStyle = true;
  }
}

/**
 * @description
 * Builder. Create variable string and and prompt part string
 * @param {prop} stateobj
 */

class BashPropmpBuilder {
  constructor(prop) {
    this.prop = prop;
  }
  getVariableName(namePart) {
    return `${namePart}${this.prop.id}`;
  }
  checkStyle() {
    if (this.prop.fg.colorId === 'RST' && this.prop.bg.colorId === 'RST') {
      this._product.hasStyle = false;
    }
  }
}
/**
 * @specific
 * Builder. Create specific variable part
 */
class VarBuilder extends BashPropmpBuilder {
  constructor(prop) {
    super(prop);
    this.reset();
    super.checkStyle();
  }
  reset() {
    this._product = new Product();
  }
  setVarName() {
    if (this._product.hasStyle) {
      const name = super.getVariableName('VR');
      this._product.var.push(`${name}=${this._product.escCode}`);
    }
  }
  setColor() {
    if (this._product.hasStyle) {
      const fgcolor =
        this.prop.fg.colorId !== 'RST' ? `38;05;${this.prop.fg.colorId};` : '';
      const bgcolor =
        this.prop.bg.colorId !== 'RST' ? `48;05;${this.prop.bg.colorId};` : '';
      this._product.var.push(`${fgcolor}${bgcolor}m`);
    }
  }
  getPromptPart() {
    return this._product.var;
  }
}
/**
 * @specific
 * Builder. Create specific psone varible part
 */

class PsOneBuilder extends BashPropmpBuilder {
  constructor(prop) {
    super(prop);
    this.reset();
    super.checkStyle();
  }
  reset() {
    this._product = new Product();
  }
  setDecoration() {
    if (this._product.hasStyle) {
      const varName = super.getVariableName('VR');
      this._product.part.push(`\${${varName}}`);
    }
  }
  setSequences() {
    this._product.part.push(this.prop.code);
  }
  setRst() {
    if (this._product.hasStyle) {
      this._product.part.push('${RST}');
    }
  }
  getPromptPart() {
    return this._product.part;
  }
}
/**
 * @interface
 * Builder interface
 * @param {instanse} builder
 */

class Director {
  constructor(builder) {
    this._builder = builder;
  }
  createPsoneString() {
    this._builder.setDecoration();
    this._builder.setSequences();
    this._builder.setRst();
  }
  createVariableString() {
    this._builder.setVarName();
    this._builder.setColor();
  }
}

function client(prop) {
  const builder = new PsOneBuilder(prop);
  const director = new Director(builder);
  const varbuilder = new VarBuilder(prop);
  const vardirector = new Director(varbuilder);
  director.createPsoneString();
  vardirector.createVariableString();
  return {
    psonepart: builder.getPromptPart().join(''),
    variable: varbuilder.getPromptPart().join(''),
  };
}
const result = state.map((e) => {
  return e.map((e) => client(e));
});

class Document {
  constructor(arr) {
    this.arr = arr;
    this.varLIst = [];
  }
  createVariableList() {}
  createPsoneLine() {}
  getRusuilt() {}
}

console.log(result);
