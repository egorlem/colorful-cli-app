import update from "immutability-helper";

let initialState = {
  resPsOneLine: [
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
      text: "The base name of term",
      sequences: "ttys001",
      code: "\\l",
      style: ["regular"],
      bg: {
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
  ],
  twoline: [
    [
      {
        id: 1,
        text: "The hostname (short) [ln1]",
        sequences: "LocalHost",
        code: "\\h",
      },
      {
        id: 2,
        text: "The base name of term [ln1]",
        sequences: "ttys001",
        code: "\\l",
      },
    ],

    [
      {
        id: 1,
        text: "The hostname (short) [ln2]",
        sequences: "LocalHost",
        code: "\\h",
      },
      {
        id: 2,
        text: "The base name of term [ln2]",
        sequences: "ttys001",
        code: "\\l",
      },
    ],

    [
      {
        id: 1,
        text: "The hostname (short) [ln3]",
        sequences: "LocalHost",
        code: "\\h",
      },
      {
        id: 2,
        text: "The base name of term [ln3]",
        sequences: "ttys001",
        code: "\\l",
      },
    ],
  ],
};

export function resultReducer(state = initialState, action) {
  switch (action.type) {
    case "RESULT/MLTARRTEST":
      return update(state, {
        twoline: {
          [action.payload.lineIndex]: {
            $splice: [
              [action.payload.index, 1],
              [action.payload.atIndex, 0, action.payload.card],
            ],
          },
        },
      });
    case "RESULT/CHANE_LINE_TEST":
      return update(state, {
        twoline: {
          [action.payload.fromLineIndex]: {
            $splice: [[action.payload.index, 1]],
          },
          [action.payload.toLineIndex]: {
            $push: [[action.payload.card]],
          },
        },
      });
    case "DND/RESULT/EDIT_ELEMENT_POSITION":
      return update(state, {
        resPsOneLine: {
          $splice: [
            [action.payload.index, 1],
            [action.payload.atIndex, 0, action.payload.card],
          ],
        },
      });
    case "RESULT/UPDATE_SELECTED_ELEMENT":
      return update(state, {
        resPsOneLine: {
          [action.payload.index]: { $merge: action.payload.element },
        },
      });
    case "RESULT/DELETE_SELECTED_ELEMENT":
      return update(state, {
        resPsOneLine: {
          $splice: [[action.payload.index, 1]],
          $apply: (arr) => {
            return arr.map((e, i) => {
              let id = i + 1;
              return { ...e, id: id };
            });
          },
        },
      });
    case "RESULT/ADD_NEW_PROMPT_ELEMENT":
      return update(state, { resPsOneLine: { $push: [action.payload] } });
    case "RESULT/MOVE_ELEMENT_FORWARD":
      return update(state, {
        resPsOneLine: {
          $splice: [
            [action.payload.index, 1],
            [action.payload.atIndex, 0, action.payload.card],
          ],
        },
      });
    case "RESULT/MOVE_ELEMENT_BACK":
      return update(state, {
        resPsOneLine: {
          $splice: [
            [action.payload.index, 1],
            [action.payload.atIndex, 0, action.payload.card],
          ],
        },
      });
  }
  return state;
}

export const changeElemPosition = (payload) => {
  return { type: "DND/RESULT/EDIT_ELEMENT_POSITION", payload };
};
export const addNewPromptElem = (payload) => {
  return { type: "RESULT/ADD_NEW_PROMPT_ELEMENT", payload };
};
export const updateSelectedElement = (payload) => {
  return { type: "RESULT/UPDATE_SELECTED_ELEMENT", payload };
};
export const deleteSelectedElement = (payload) => {
  return { type: "RESULT/DELETE_SELECTED_ELEMENT", payload };
};
export const moveElementForward = (payload) => {
  return { type: "RESULT/MOVE_ELEMENT_FORWARD", payload };
};
export const moveElementBack = (payload) => {
  return { type: "RESULT/MOVE_ELEMENT_BACK", payload };
};
export const mltArrTest = (payload) => {
  return { type: "RESULT/MLTARRTEST", payload };
};
export const changeLineTest = (payload) => {
  console.log(payload);
  return { type: "RESULT/CHANE_LINE_TEST", payload };
};
