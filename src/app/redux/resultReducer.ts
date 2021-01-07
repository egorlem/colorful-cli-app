import update from "immutability-helper";
import { testFetch } from "../../api/fetch"

let initialState = {
  currentshell: 'bash',
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
          colorId: "RST",
          hexString: "#000000",
          rgb: { r: 0, g: 0, b: 0 },
          hsl: { h: 0, s: 0, l: 0 },
          name: "Black",
        },
        fg: {
          colorId: "RST",
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
          colorId: "RST",
          hexString: "#000000",
          rgb: { r: 0, g: 0, b: 0 },
          hsl: { h: 0, s: 0, l: 0 },
          name: "Black",
        },
        fg: {
          colorId: "RST",
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

export function resultReducer(state = initialState, action: any) {
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
            $apply: (arr: any) => {
              return arr.map((e: any, i: number) => {
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
          [action.lineIndex]: { $push: [action.element] },
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
            $apply: (arr: any) => {
              return arr.map((e: any, i: number) => {
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
            $apply: (arr: any) => {
              return arr.map((e: any, i: number) => {
                let id = i + 1;
                return { ...e, id: id };
              });
            },
          },
        },
      });
    case "TEST_TNK":
      return update(state, {
        currentshell: {
          $set: action.payload
        }
      })
  }
  return state;
}

export const changeElemPosition = <T>(payload: T) => {
  debugger;
  return { type: "DND/RESULT/EDIT_ELEMENT_POSITION", payload };
};

interface IANPE {
  lineIndex: number
  element: object
};

export const addNewPromptElem = <T extends IANPE>(payload: T) => {
  return {
    type: "RESULT/ADD_NEW_PROMPT_ELEMENT",
    lineIndex: payload.lineIndex, element: payload.element
  };
};
interface USE {
  lineIndex: number
  index: number
  element: object
}

export const updateSelectedElement = <T extends USE>(payload: T) => {
  return { type: "RESULT/UPDATE_SELECTED_ELEMENT", payload };
};

export const deleteSelectedElement = (payload: any) => {
  return { type: "RESULT/DELETE_SELECTED_ELEMENT", payload };
};
export const moveElementForward = (payload: any) => {
  return { type: "RESULT/MOVE_ELEMENT_FORWARD", payload };
};
export const moveElementBack = (payload: any) => {
  return { type: "RESULT/MOVE_ELEMENT_BACK", payload };
};
export const addNewLine = () => {
  return { type: "RESULT/ADD_NEW_LINE" };
};
export const deleteCurrentLine = (payload: any) => {
  return { type: "RESULT/DELETE_CURRENT_LINE", payload };
};

export const setCurrentShell = () => {
  return {}
}
const testtnk = (payload: any) => {
  return { type: "RESULT/TEST_TNK", payload };
}

export const getResult = () => {
  return dispatch => {
    const result = testFetch().then(data => { console.log(data) });
  }
} 