let teststate = [
  {
    id: 1,
    text: "The hostname (short)",
    sequences: "LocalHost",
    code: "\\h",
    style: ["regular"],
    bg: {
      colorInfo: false,
      colorId: 0,
      hexString: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      name: "Black",
    },
    fg: {
      colorId: 156,
      hexString: "#afff87",
      rgb: { r: 175, g: 255, b: 135 },
      hsl: { h: 100, s: 100, l: 76 },
      name: "PaleGreen1",
    },
  },
  {
    id: 2,
    text: "OSECOND NAME",
    sequences: "LocalHost",
    code: "\\W",
    style: ["regular", "bold"],
    bg: {
      colorId: 196,
      hexString: "#ff0000",
      rgb: { r: 255, g: 0, b: 0 },
      hsl: { h: 0, s: 100, l: 50 },
      name: "Red1",
    },
    fg: {
      colorId: 224,
      hexString: "#ffd7d7",
      rgb: { r: 255, g: 215, b: 215 },
      hsl: { h: 0, s: 100, l: 92 },
      name: "MistyRose1",
    },
  },
];

const getSequenceCode = (sequence) => {
  return sequence;
};
const createAnsiColorString = (curid, esc = "\\e") => {
  let data = {
    colorline: `${esc}[`,
    variables: {
      bg: {},
      fg: {},
    },
  };
  let id = curid;
  return function addBgColor(bgcolor) {
    const pattern = "48;05;";
    const variable = `$\{B${id}C\}`;
    let line = `${data.colorline}${variable}`;
    if (bgcolor.colorId === 0) {
      line = "";
    }
    data.colorline = `${line}`;
    data.variables.bg.code = `${pattern}${bgcolor.colorId}`;
    data.variables.bg.name = `B${id}C`;
    return function addFgColor(fgcolor) {
      const pattern = "38;05;";
      const variable = `$\{F${id}C\}`;
      let line = `${data.colorline}${variable}`;
      data.colorline = `${line}`;
      data.variables.fg.code = `${pattern}${fgcolor.colorId}`;
      data.variables.fg.name = `B${id}C`;
      return data;
    };
  };
};
const composePromptStringPart = (e) => {
  const clearcode = "[0m";
  const esc = "\\e";
  const color = createAnsiColorString(e.id, esc)(e.bg)(e.fg);
  const sequncescode = getSequenceCode(e.code);
  return {
    line: `${color.colorline}${sequncescode}${esc}${clearcode}`,
    letit: color.variables,
  };
};

export const composePromptResult = (arr) => {
  const subresult = arr.map((e) => composePromptStringPart(e));
  const result = subresult.reduce((acc, elm) => {
    return acc + elm.line;
  }, "");
  return { string: `PS1="${result}"`, variables: subresult };
};
