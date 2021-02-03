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

const client = (state, shell = 'bash') => {
  const doc = new RcDocument(state, shell);
  doc.create();
  return doc.getResult();
};

module.exports = client;

//=============================================================================
