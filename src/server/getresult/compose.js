//const state = require('./teststate');

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
      this._product.var.push(`${name}="${this._product.escCode}`);
    }
  }
  setColors() {
    if (this._product.hasStyle) {
      const fgcolor =
        this.prop.fg.colorId !== 'RST' ? `38;05;${this.prop.fg.colorId};` : '';
      const bgcolor =
        this.prop.bg.colorId !== 'RST' ? `48;05;${this.prop.bg.colorId};` : '';
      this._product.var.push(`${fgcolor}${bgcolor}m"`);
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
    this._builder.setColors();
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

class Document {
  constructor(arr) {
    this.arr = arr;
    this._addShellSyntax();
  }
  createVariableList() {
    this.varlist = this.arr
      .flat()
      .filter((e) => e.variable)
      .map((e) => e.variable);
  }
  createPsoneLine() {
    this.psoneline = this.arr.map((line) => {
      return line
        .map((linepart) => {
          return linepart.psonepart;
        })
        .join('');
    });
  }
  _addShellSyntax() {
    if (!this.arr) {
      throw new Error('Errrrrrrr');
    }
    if (this.arr.length > 1) {
      const lastindex = this.arr.length - 1;
      this.arr[0].unshift({ psonepart: 'PS1="' });
      this.arr[lastindex].push({ psonepart: '"' });
    } else if (this.arr.length === 1) {
      this.arr[0].unshift({ psonepart: 'PS1="' });
      this.arr[0].push({ psonepart: '"' });
    }
  }
  getRusuilt() {
    return {
      variableList: this.varlist,
      psonestring: this.psoneline,
    };
  }
}

function cmp(arr) {
  const subres = arr.map((e) => {
    return e.map((e) => client(e));
  });
  const doc = new Document(subres);
  doc.createVariableList();
  doc.createPsoneLine();
  return doc.getRusuilt();
}

module.exports = cmp;
