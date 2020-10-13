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
  return {
    id: e.colorId,
    colorCode: `${pattern}${e.colorId}`,
    varName: `\$\{${varname}${i}\}`,
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

const createPromptString = (statepart, bgmap, fgmap) => {
  return statepart
    .map((curEl) => {
      const fgvar = fgmap.find((e) => curEl.fg.colorId === e.id);
      const bgvar = bgmap.find((e) => curEl.bg.colorId === e.id);
      return `${fgvar.varName}${bgvar.varName}${curEl.code}\$\{RST\}`;
    })
    .join("");
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
    return `${e.varName}=\\[\\e[${e.colorCode}m\\]       #${e.colorName}`;
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
