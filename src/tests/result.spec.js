// const { TestScheduler } = require("jest");
// const {
//   getSequenceCode,
//   convertToAnsiFgColor,
//   convertToAnsiBgColor,
//   joinAnsiColorsString,
//   composePromptStringPart,
// } = require("../components/result/composeRes");

// let a = [
//   {
//     id: 1,
//     text: "The hostname (short)",
//     sequences: "LocalHost",
//     code: "\\h",
//     style: ["regular"],
//     bg: {
//       colorInfo: false,
//       colorId: 0,
//       hexString: "#000000",
//       rgb: { r: 0, g: 0, b: 0 },
//       hsl: { h: 0, s: 0, l: 0 },
//       name: "Black",
//     },
//     fg: {
//       colorId: 156,
//       hexString: "#afff87",
//       rgb: { r: 175, g: 255, b: 135 },
//       hsl: { h: 100, s: 100, l: 76 },
//       name: "PaleGreen1",
//     },
//   },
//   {
//     id: 2,
//     text: "OSECOND NAME",
//     sequences: "LocalHost",
//     code: "\\W",
//     style: ["regular", "bold"],
//     bg: {
//       colorId: 196,
//       hexString: "#ff0000",
//       rgb: { r: 255, g: 0, b: 0 },
//       hsl: { h: 0, s: 100, l: 50 },
//       name: "Red1",
//     },
//     fg: {
//       colorId: 224,
//       hexString: "#ffd7d7",
//       rgb: { r: 255, g: 215, b: 215 },
//       hsl: { h: 0, s: 100, l: 92 },
//       name: "MistyRose1",
//     },
//   },
// ];

// describe("Compose Result", () => {
//   test("sequnces result", () => {
//     expect(getSequenceCode(a[0].code)).toBe("\\h");
//     expect(getSequenceCode(a[1].code)).toBe("\\W");
//   });
//   test("generate 8-bit ANSI color fg string", () => {
//     expect(convertToAnsiFgColor(a[0].fg.colorId, "38;05;")).toEqual(
//       "38;05;156;"
//     );
//     expect(convertToAnsiFgColor(a[1].fg.colorId, "38;05;")).toEqual(
//       "38;05;224;"
//     );
//   });
//   test("generate 8-bit ANSI color bg string", () => {
//     expect(convertToAnsiBgColor(a[0].bg.colorId, "48;05;")).toEqual("");
//     expect(convertToAnsiBgColor(a[1].bg.colorId, "48;05;")).toEqual(
//       "48;05;196;"
//     );
//   });
//   test("generate 8-bit color ANSI result String", () => {
//     let esc = "\\033";
//     let ansifg = convertToAnsiFgColor(a[0].fg.colorId, "38;05;");
//     let ansibg = convertToAnsiBgColor(a[0].bg.colorId, "48;05;");
//     expect(joinAnsiColorsString(esc, "", ansifg, ansibg)).toEqual(
//       `\\033[38;05;156;1m`
//     );
//   });
//   test("generate ful ANSI String", () => {
//     let clearcode = "[0m";
//     let esc = "\\033";
//     let sequncescode = getSequenceCode(a[0].code);
//     let ansifg = convertToAnsiFgColor(a[0].fg.colorId, "38;05;");
//     let ansibg = convertToAnsiBgColor(a[0].bg.colorId, "48;05;");
//     let coloercode = joinAnsiColorsString(esc, "", ansifg, ansibg);
//     expect(
//       composePromptStringPart(coloercode, sequncescode, esc, clearcode)
//     ).toEqual(`\\033[38;05;156;1m\\h\\033[0m`);
//   });
//   // test("generate fool 8-bit color ANSI String", () => {
//   //   let sequncescode = getSequenceCode(a[0].code);
//   //   let ansifg = convertToAnsiFgColor(a[0].fg.colorId, "38;05;");
//   //   let ansibg = convertToAnsiBgColor(a[0].bg.colorId, "48;05;");
//   // });
// });
