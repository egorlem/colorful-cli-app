import update from "immutability-helper";

let initialState = {
  resPsOneLine: [
    [
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
        type: "SEQUENCES",
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
        type: "SEQUENCES",
      },
    ],
  ],
};

export function resultReducer(state = initialState, action) {
  switch (action.type) {
    case "RESULT/ADD_NEW_LINE":
      return update(state, {
        resPsOneLine: { $push: [[]] },
      });
    case "RESULT/DELETE_CURRENT_LINE":
      return update(state, {
        resPsOneLine: {
          $splice: [[action.payload.index, 1]],
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
          [action.payload.lineIndex]: {
            [action.payload.index]: { $merge: action.payload.element },
          },
        },
      });
    case "RESULT/DELETE_SELECTED_ELEMENT":
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: {
            $splice: [[action.payload.index, 1]],
            $apply: (arr) => {
              return arr.map((e, i) => {
                let id = i + 1;
                return { ...e, id: id };
              });
            },
          },
        },
      });
    case "RESULT/ADD_NEW_PROMPT_ELEMENT":
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: { $push: [action.payload.element] },
        },
      });
    case "RESULT/MOVE_ELEMENT_FORWARD":
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: {
            $splice: [
              [action.payload.index, 1],
              [action.payload.atIndex, 0, action.payload.card],
            ],
            $apply: (arr) => {
              return arr.map((e, i) => {
                let id = i + 1;
                return { ...e, id: id };
              });
            },
          },
        },
      });
    case "RESULT/MOVE_ELEMENT_BACK":
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: {
            $splice: [
              [action.payload.index, 1],
              [action.payload.atIndex, 0, action.payload.card],
            ],
            $apply: (arr) => {
              return arr.map((e, i) => {
                let id = i + 1;
                return { ...e, id: id };
              });
            },
          },
        },
      });
  }
  return state;
}

export const changeElemPosition = (payload) => {
  return { type: "DND/RESULT/EDIT_ELEMENT_POSITION", payload };
};
export const addNewPromptElem = (payload) => {
  console.log(payload);
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
export const addNewLine = () => {
  return { type: "RESULT/ADD_NEW_LINE" };
};
export const deleteCurrentLine = (payload) => {
  return { type: "RESULT/DELETE_CURRENT_LINE", payload };
};
