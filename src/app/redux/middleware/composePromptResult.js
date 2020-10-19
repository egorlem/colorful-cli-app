//import update from "immutability-helper";
const state = require("./teststate");

///// Style varibale string  VAR=\[\e[DECORC1C2m\]
///// style Sting 1 \[\e[ DECOR C1 C2 m\]

//// prompt string PS1="${VAR}\s${RST}"

const getDecorationCode = (code) => {
  if (!code) return "";
  return `${code};`;
};
const getColorCode = (pattern, code, bracket = "") => {
  if (code === "RST") return "";
  return `${pattern}${code}${bracket}`;
};
const createStyleString = (bg, fg) => {
  const colorscode = "".concat(
    getDecorationCode(""),
    getColorCode("48;05;", bg, ";"),
    getColorCode("38;05;", fg, "m")
  );
  return colorscode;
};

const createStyleVariable = (i, decor, colors) => {
  if (!colors) {
    return {
      varString: "",
      varName: "",
      syntax: [],
    };
  }
  const esc = "\\e";
  const varName = `ST${i}`;
  return {
    varString: `${varName}="\\[${esc}[${decor}${colors}\\]`,
    varName: `\$\{${varName}\}`,
    varSyntax: [
      { text: varName, type: "shVariable" },
      { text: `="\\[`, type: "shString" },
      { text: esc, type: "shSpecial" },
      { text: `[`, type: "shString" },
      { text: decor, type: "shString" },
      { text: colors, type: "shString" },
      { text: "\\]", type: "shString" },
    ],
  };
};

const createPsOneSting = (bg, fg, decor, type, seqcode = "test", index) => {
  const styleString = createStyleString(bg, fg);
  const decorString = getDecorationCode(decor);
  const { varString, varName, varSyntax } = createStyleVariable(
    index,
    decorString,
    styleString
  );
  const RST = styleString ? `\$\{RST\}` : "";
  return {
    varibale: {
      varString: varString,
      varSyntax: varSyntax,
    },
    psone: {
      psonePart: `${varName}${seqcode}${RST}`,
      psoneSyntax: [
        { text: "${", type: "shPreProc" },
        { text: `ST${index}`, type: "shVariable" },
        { text: "}", type: "shPreProc" },
        { text: `${seqcode}`, type: "shSpecial" },
        { text: "${", type: "shPreProc" },
        { text: "RST", type: "shVariable" },
        { text: "}", type: "shPreProc" },
      ],
    },
  };
};
// console.log(createPsOneSting());

const cmp2 = (arr) => {
  return arr.map((line) => {
    return line.map((elem, index) => {
      return createPsOneSting(
        elem.bg.colorId,
        elem.fg.colorId,
        "",
        elem.type,
        elem.code,
        index
      );
    });
  });
};

//const subres = cmp(state);

const cbres = (res) => {
  const psoneresstr = res.map((e, i, arr) => {
    let start = i === 0 ? 'PS1="' : "";
    let end = arr.length - 1 === i ? '"' : "";
    let line = e.map((e) => e.psone.psonePart).join("");
    return `${start}${line}${end}\n`;
  });
  const varibaleStr = res.flat().map((e, i, arr) => {
    let varstr = e.varibale.varString;
    return `${varstr}\n`;
  });
  return [...varibaleStr, ...psoneresstr];
};

export const cmp = (arr) => {
  const subres = cmp2(arr);
  const pscbline = cbres(subres);
  return {
    res: subres,
    pscbline: pscbline,
  };
};

// let colorObject = {
//   id: "",
//   colorCode: "",
//   colorName: "",
// };
// const LEFTBRACKET = { text: "${", type: "SH/BRACKET" };
// const RIGHTBRACKET = { text: `}`, type: "SH/BRACKET" };
// const STRING = { text: "", type: "SH/STRING" };
// const VARIABLE = { text: "", type: "SH/VARIABLE" };

// const setText = (group, _text) => {
//   return update(group, { text: { $set: _text } });
// };

// const createUniqColorsMap = (arr) => {
//   const { uniqColors } = arr.reduce(
//     (acc, el) => {
//       if (acc.map[el["colorId"]]) return acc;
//       acc.map[el["colorId"]] = true;
//       acc.uniqColors.push(el);
//       return acc;
//     },
//     {
//       uniqColors: [],
//       map: {},
//     }
//   );
//   return uniqColors;
// };

// const objectifyColors = (e, i, pattern, varname) => {
//   if (e.colorId === "RST") {
//     return colorObject;
//   }
//   return update(colorObject, {
//     id: { $set: e.colorId },
//     colorCode: { $set: `${pattern}${e.colorId}` },
//     colorName: { $set: e.name },
//   });
// };

// const getColors = (state) => {
//   const uniqBgMap = createUniqColorsMap(state.flat().map((e) => e.bg)).map(
//     (e, i) => {
//       return objectifyColors(e, i, "48;05;", "BC");
//     }
//   );
//   const uniqFgMap = createUniqColorsMap(state.flat().map((e) => e.fg)).map(
//     (e, i) => {
//       return objectifyColors(e, i, "38;05;", "FC");
//     }
//   );
//   return {
//     uniqBgMap: uniqBgMap,
//     uniqFgMap: uniqFgMap,
//   };
// };

// // FIND AND CREATE UNIQ COLORS OBJ
// const varName = (obj) => {
//   if (!obj) {
//     return [];
//   }
//   return [
//     { text: "${", type: BRACKET },
//     { text: `${obj.varName}`, type: VARIABLE },
//     { text: `}`, type: BRACKET },
//   ];
// };

// const createPromptString = (statepart, bgmap, fgmap) => {
//   let rcStringPart = statepart.map((curEl) => {
//     const fgvar = fgmap.find((e) => curEl.fg.colorId === e.id);
//     const bgvar = bgmap.find((e) => curEl.bg.colorId === e.id);
//     const var1 = varName(fgvar);
//     const var2 = varName(bgvar);
//     const var3 = var1 || var2 ? "JN" : "есть";
//     //const string = `\${${fgvar.varName}}\${${bgvar.varName}}${curEl.code}\$\{RST\}`;
//     return {
//       //  string: string,
//       syntax: [
//         ...var1,
//         ...var2,
//         { text: `${curEl.code}`, type: VARIABLE },
//         ...var3,
//         // { text: "${", type: BRACKET },
//         // { text: "RST", type: VARIABLE },
//         // { text: "}", type: BRACKET },
//       ],
//     };
//   });
//   return { rcStringPart: rcStringPart };
// };
// const rccode = (state, uniqBgMap, uniqFgMap) => {
//   let a = state.map((e) => {
//     return createPromptString(e, uniqBgMap, uniqFgMap);
//   });
//   return a;
// };

// // CREATE PS STRING PARTS
// const createVariableStrings = (colorarr) => {
//   return colorarr.map((e) => {
//     if (!e.varName) {
//       return {
//         string: ``,
//         syntax: [],
//       };
//     }
//     return {
//       string: `${e.varName}="\\[\\e[${e.colorCode}m\\]"       #${e.colorName}`,
//       syntax: [
//         { text: e.varName, type: VARIABLE },
//         { text: `"="\\[\\e[${e.colorCode}m\\]"`, type: STRING },
//         { text: `#${e.colorName}`, type: COMMENT },
//       ],
//     };
//   });
// };

// export const cmp = (state) => {
//   const { uniqBgMap, uniqFgMap } = getColors(state);
//   const rcFileStringParts = rccode(state, uniqBgMap, uniqFgMap);
//   const fg = createVariableStrings(uniqFgMap);
//   const bg = createVariableStrings(uniqBgMap);
//   return {
//     ps: rcFileStringParts,
//     fg: fg,
//     bg: bg,
//   };
// };

//console.log(cmp(state));
