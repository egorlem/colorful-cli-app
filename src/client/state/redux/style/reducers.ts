import { combineReducers } from 'redux';
import update from "immutability-helper";
import types from "./action.types"

import globalcolors from "./techstate/colors";
import psOneSequences from "./techstate/promptsequences";
import textdecoration from "./techstate/textdecoration";
import unicode from "./techstate/unicode";

import { IPsOneStyle, IPsOneCondition, IPsOneStyleAndCondition } from './types'

let initialState: IPsOneStyleAndCondition = {
  selectedLine: 0,
  status: null,
  initialElement: {
    id: 0,
    options: null,
    text: '',
    sequences: '',
    code: '',
    style: [],
    position: 0,
    bg: {
      colorInfo: false,
      colorId: "RST",
      hexString: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      name: "Black",
    },
    fg: {
      colorInfo: false,
      colorId: "RST",
      hexString: "#eeeeee",
      rgb: { r: 238, g: 238, b: 238 },
      hsl: { h: 0, s: 0, l: 93 },
      name: "Grey93",
    },
    type: ''
  },
  globalcolors: globalcolors,
  textdecoration: textdecoration,
  symbols: unicode,
  fgcolor: {
    colorInfo: false,
    colorId: 255,
    hexString: "#eeeeee",
    rgb: { r: 238, g: 238, b: 238 },
    hsl: { h: 0, s: 0, l: 93 },
    name: "Grey93",
  },
  bgcolor: {
    colorInfo: false,
    colorId: 0,
    hexString: "#000000",
    rgb: { r: 0, g: 0, b: 0 },
    hsl: { h: 0, s: 0, l: 0 },
    name: "Black",
  },
  psOneSequences: psOneSequences,
  orignIndex: null,
  currentElement: {
    id: 0,
    options: null,
    text: '',
    sequences: '',
    code: '',
    style: [],
    position: 0,
    bg: {
      colorInfo: false,
      colorId: "RST",
      hexString: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      name: "Black",
    },
    fg: {
      colorInfo: false,
      colorId: "RST",
      hexString: "#eeeeee",
      rgb: { r: 238, g: 238, b: 238 },
      hsl: { h: 0, s: 0, l: 93 },
      name: "Grey93",
    },
    type: ''
  },
};
function psoneelement(state = initialState, action: IPsOneStyle): IPsOneStyleAndCondition {
  switch (action.type) {
    case types.SETBGCOLOR:
      return update(state, {
        currentElement: { bg: { $set: action.payload } },
      });
    case types.SETFGCOLOR:
      return update(state, {
        currentElement: { fg: { $set: action.payload } },
      });
    case types.REMOVETEXTDECOR:
      return update(state, {
        currentElement: { style: { $splice: [[action.payload, 1]] } },
      });
    case types.SETTEXTDECOR:
      return update(state, {
        currentElement: { style: { $push: [action.payload] } },
      });
    case types.CHANGETEXT: {
      return update(state, {
        currentElement: { sequences: { $set: action.payload } },
      })
    }
    case types.SETCURELEM:
      return update(state, {
        currentElement: { $merge: action.payload },
      });
    case types.UPDATECURELEM:
      return update(state, {
        currentElement: { $set: action.payload.curCard },
        orignIndex: { $set: action.payload.oringIndex },
      });
    case types.UPDATEPOSITION:
      return update(state, {
        currentElement: { position: { $set: action.payload.atPosition } }
      })
    case types.SETELEMTOINIT:
      return update(state, {
        //      isElementSelected: { $set: false },
        currentElement: { $set: state.initialElement },
        // fgcolor: { $set: state.globalcolors.find((e) => 255 === e.colorId) },
        // bgcolor: { $set: state.globalcolors.find((e) => 0 === e.colorId) },
      });
    case types.SETLINE:
      return update(state, {
        selectedLine: { $set: action.payload },
      });
    default:
      return state;
  }
}
const reducer = combineReducers({
  psoneelement: psoneelement
})
export default reducer