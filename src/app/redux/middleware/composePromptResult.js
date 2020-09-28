// FIND UNIQ COLORS
const filterUniqColors = (arr) => {
  const UNIQ_BG_COLORS = arr.reduce(
    (acc, el) => {
      if (acc.map[el.bg.colorId]) return acc;
      acc.map[el.bg.colorId] = true;
      acc.uniqColors.push(el.bg);
      return acc;
    },
    {
      uniqColors: [],
      map: {},
    }
  );

  const UNIQ_FG_COLORS = arr.reduce(
    (acc, el) => {
      if (acc.map[el.fg.colorId]) return acc;
      acc.map[el.fg.colorId] = true;
      acc.uniqColors.push(el.fg);
      return acc;
    },
    {
      uniqColors: [],
      map: {},
    }
  );
  return {
    uniqBg: UNIQ_BG_COLORS.uniqColors,
    uniqFg: UNIQ_FG_COLORS.uniqColors,
  };
};

const ObjectifyColorbg = (e, i) => {
  if (e.colorId === 0) {
    return {
      id: e.colorId,
      colorCode: `48;05;${e.colorId}`,
      varName: ``,
      colorName: e.name,
    };
  }
  return {
    id: e.colorId,
    colorCode: `48;05;${e.colorId}`,
    varName: `\$\{B${i}C\}`,
    colorName: e.name,
  };
};
const ObjectifyColorfg = (e, i) => {
  return {
    id: e.colorId,
    colorCode: `38;05;${e.colorId}`,
    varName: `\$\{F${i}C\}`,
    colorName: e.name,
  };
};

const createColorsObject = (arr) => {
  const { uniqBg, uniqFg } = filterUniqColors(arr);
  return {
    bg: uniqBg.map(ObjectifyColorbg),
    fg: uniqFg.map(ObjectifyColorfg),
  };
};

const createPromptString = (arr) => {
  const { bg, fg } = createColorsObject(arr);
  const res = arr.map((curEl) => {
    const fgvar = fg.find((e) => curEl.fg.colorId === e.id);
    const bgvar = bg.find((e) => curEl.bg.colorId === e.id);
    return `${fgvar.varName}${bgvar.varName}${curEl.code}\$\{RST\}`;
  });
  return {
    promptString: res,
    bg: bg,
    fg: fg,
  };
};

export const composePrmopt = (arr) => {
  const result = createPromptString(arr);
  return result;
};
