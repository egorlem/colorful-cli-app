import types from './action.types';
import { combineReducers } from "redux";
import { IPsOneLineModel, IPsOnePositon, IPsOneEelement } from './types'
import update from "immutability-helper";

let initialState: IPsOneLineModel = {
  psonemodel: [
    [
      {
        options: null,
        id: 1,
        text: "The hostname (short)",
        sequences: "LocalHost",
        code: "\\h",
        style: [{
          style: "regular",
          code: "00",
        }],
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
        style: [{
          style: "regular",
          code: "00",
        },],
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

export function psonecrud(state = initialState, action: IPsOnePositon): IPsOneLineModel {
  switch (action.type) {
    case types.ADDNEWLINE:
      return update(state, {
        psonemodel: { $push: [[]] },
      });
    case types.REMOVELINE:
      return update(state, {
        psonemodel: {
          $splice: [[action.payload.index, 1]],
        },
      });
    case types.MOVEFORWARD:
      return update(state, {
        psonemodel: {
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
    case types.MOVEBACK:
      return update(state, {
        psonemodel: {
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
    case types.UPDATESELECTEDELEM:
      return update(state, {
        psonemodel: {
          [action.payload.lineIndex]: {
            [action.payload.index]: { $merge: action.payload.element },
          },
        },
      });
    case types.DELETESELECTRD:
      return update(state, {
        psonemodel: {
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
    case types.ADDNEWELEM: // DONE
      return update(state, {
        psonemodel: {
          [action.payload.lineIndex]: { $push: [action.payload.element] },
        },
      });
    default:
      return state;

  }
}
const reducer = combineReducers({
  psonecrud: psonecrud,
})
export default reducer