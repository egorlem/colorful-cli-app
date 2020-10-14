const COMMENT = "SH/COMMENT";
const BRACKET = "SH/BRACKET";
const VARIABLE = "SH/VARIABLE";
const STRING = "SH/STRING";

const state = require("./teststate");

const createUniqColorsMap = (arr) => {
  const { uniqColors } = arr.reduce(
    (acc, el) => {
      if (acc.map[el["colorId"]]) return acc;
      acc.map[el["colorId"]] = true;
      acc.uniqColors.push(el);
      return acc;
    },
    {
      uniqColors: [],
      map: {},
    }
  );
  return uniqColors;
};

const objectifyColors = (e, i, pattern, varname) => {
  if (e.colorId === "RST") {
    return {
      id: "",
      colorCode: "",
      varName: "",
      colorName: "",
    };
  }
  return {
    id: e.colorId,
    colorCode: `${pattern}${e.colorId}`,
    varName: `${varname}${i}`,
    colorName: e.name,
  };
};

const getColors = (state) => {
  const uniqBgMap = createUniqColorsMap(state.flat().map((e) => e.bg)).map(
    (e, i) => {
      return objectifyColors(e, i, "48;05;", "BC");
    }
  );
  const uniqFgMap = createUniqColorsMap(state.flat().map((e) => e.fg)).map(
    (e, i) => {
      return objectifyColors(e, i, "38;05;", "FC");
    }
  );
  return {
    uniqBgMap: uniqBgMap,
    uniqFgMap: uniqFgMap,
  };
};

// FIND AND CREATE UNIQ COLORS OBJ
const varName = (obj) => {
  if (!obj) {
    return [];
  }
  return [
    { text: "${", type: BRACKET },
    { text: `${obj.varName}`, type: VARIABLE },
    { text: `}`, type: BRACKET },
  ];
};

const createPromptString = (statepart, bgmap, fgmap) => {
  let rcStringPart = statepart.map((curEl) => {
    const fgvar = fgmap.find((e) => curEl.fg.colorId === e.id);
    const bgvar = bgmap.find((e) => curEl.bg.colorId === e.id);
    const var1 = varName(fgvar);
    const var2 = varName(bgvar);
    //const string = `\${${fgvar.varName}}\${${bgvar.varName}}${curEl.code}\$\{RST\}`;
    return {
      //  string: string,
      syntax: [
        ...var1,
        ...var2,
        { text: `${curEl.code}`, type: VARIABLE },
        { text: "${", type: BRACKET },
        { text: "RST", type: VARIABLE },
        { text: "}", type: BRACKET },
      ],
    };
  });
  return { rcStringPart: rcStringPart };
};
const rccode = (state, uniqBgMap, uniqFgMap) => {
  let a = state.map((e) => {
    return createPromptString(e, uniqBgMap, uniqFgMap);
  });
  return a;
};

// CREATE PS STRING PARTS
const createVariableStrings = (colorarr) => {
  return colorarr.map((e) => {
    if (!e.varName) {
      return {
        string: ``,
        syntax: [],
      };
    }
    return {
      string: `${e.varName}="\\[\\e[${e.colorCode}m\\]"       #${e.colorName}`,
      syntax: [
        { text: e.varName, type: VARIABLE },
        { text: `"="\\[\\e[${e.colorCode}m\\]"`, type: STRING },
        { text: `#${e.colorName}`, type: COMMENT },
      ],
    };
  });
};

export const cmp = (state) => {
  const { uniqBgMap, uniqFgMap } = getColors(state);
  const rcFileStringParts = rccode(state, uniqBgMap, uniqFgMap);
  const fg = createVariableStrings(uniqFgMap);
  const bg = createVariableStrings(uniqBgMap);
  return {
    ps: rcFileStringParts,
    fg: fg,
    bg: bg,
  };
};

//console.log(cmp(state));
