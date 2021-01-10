import {
  ADDNEWELEM, ADDNEWLINE, REMOVELINE, MOVEFORWARD, MOVEBACK, UPDATESELECTEDELEM,
  DELETESELECTRD
} from './actiontypes';
import { IresultState, IResultActions, IResultElement, IElementPosition } from './../types/redux';
import update from "immutability-helper";
import { testFetch } from "../../api/fetch"
import { Dispatch } from 'redux';

let initialState: IresultState = {
  currentshell: 'bash',
  resPsOneLine: [
    [
      {
        options: null,
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
        options: null,
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

export function resultReducer(state = initialState, action: IResultActions): IresultState {
  switch (action.type) {
    case ADDNEWLINE:
      return update(state, {
        resPsOneLine: { $push: [[]] },
      });
    case REMOVELINE:
      return update(state, {
        resPsOneLine: {
          $splice: [[action.payload.index, 1]],
        },
      });
    // case "DND/RESULT/EDIT_ELEMENT_POSITION": //????
    //   return update(state, {
    //     resPsOneLine: {
    //       $splice: [
    //         [action.payload.index, 1],
    //         [action.payload.atIndex, 0, action.payload.card],
    //       ],
    //     },
    //   });
    case UPDATESELECTEDELEM:
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: {
            [action.payload.index]: { $merge: action.payload.element },
          },
        },
      });
    case DELETESELECTRD:
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
    case ADDNEWELEM: // DONE
      return update(state, {
        resPsOneLine: {
          [action.payload.lineIndex]: { $push: [action.payload.element] },
        },
      });
    case MOVEFORWARD:
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
    case MOVEBACK:
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
    // case "TEST_TNK":
    //   return update(state, {
    //     currentshell: {
    //       $set: action.payload
    //     }
    //   })
    default:
      return state;
  }
}

// export const changeElemPosition = <T>(payload: T) => {
//   return { type: "DND/RESULT/EDIT_ELEMENT_POSITION", payload };
// };


/**@description Add new new element to result PS1 line*/
export const addNewPromptElem = (payload: IResultElement): IResultActions => {
  return { type: ADDNEWELEM, payload };
};
/**@description Update selected element. Selected === Current*/
export const updateSelectedElement = (payload: IResultElement): IResultActions => {
  return { type: UPDATESELECTEDELEM, payload };
};
/**@description */
type DeleteElmPayload = { index: number, lineIndex: number }
export const deleteSelectedElement = (payload: DeleteElmPayload): IResultActions => {
  debugger;
  return { type: DELETESELECTRD, payload };
};
/**@description */
export const moveElementForward = (payload: IElementPosition): IResultActions => {
  debugger;
  return { type: MOVEFORWARD, payload };
};
/**@description*/
export const moveElementBack = (payload: IElementPosition): IResultActions => {
  return { type: MOVEBACK, payload };
};
/**@description*/
export const addNewLine = (): IResultActions => {
  return { type: ADDNEWLINE };
};
/**@description*/
export const deleteCurrentLine = (payload: any): IResultActions => {
  return { type: REMOVELINE, payload } as any
};

const testtnk = (payload: any) => {
  return { type: "RESULT/TEST_TNK", payload };
}

export const getResult = () => {
  return (dispatch: Dispatch<IResultActions>) => {
    const result = testFetch('ok').then(data => { console.log(data) });
  }
}
