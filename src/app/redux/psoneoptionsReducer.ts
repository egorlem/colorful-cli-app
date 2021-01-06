import { globalcolors } from "./techstate/colors";
import { psOneSequences } from "./techstate/promptsequences";
import { textdecoration } from "./techstate/textdecoration";
import { unicode } from "./techstate/unicode";
import update from "immutability-helper";
import { CHANGETEXT } from './reduxtypes'

let initialState = {
  selectedLine: 0,
  status: null,
  initElement: {
    id: null,
    text: null,
    sequences: null,
    code: null,
    style: ["regular"],
    bg: {
      colorId: "RST",
      hexString: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      name: "Black",
    },
    fg: {
      colorId: "RST",
      hexString: "#eeeeee",
      rgb: { r: 238, g: 238, b: 238 },
      name: "Grey93",
    },
  },
  activeControls: [
    { name: "elementMenu", flag: true },
    { name: "bgColorMenu", flag: true },
    { name: "fgColorMenu", flag: true },
    { name: "symbolMenu", flag: true },
  ],
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
    options: null,
    id: null,
    text: null,
    sequences: null,
    code: null,
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
      colorInfo: false,
      colorId: "RST",
      hexString: "#eeeeee",
      rgb: { r: 238, g: 238, b: 238 },
      hsl: { h: 0, s: 0, l: 93 },
      name: "Grey93",
    },
  },
};

export function psOneOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_CURRENT_CONTROL":
      return {
        ...state,
        activeControls: state.activeControls.map((e) =>
          e.name === action.payload ? { ...e, flag: false } : e
        ),
      };
    case "CLOSE_CURRENT_CONTROL":
      return {
        ...state,
        activeControls: state.activeControls.map((e) =>
          e.name === action.payload ? { ...e, flag: true } : e
        ),
      };
    case "CLOSE_ALL_CONTROLS":
      return {
        ...state,
        activeControls: state.activeControls.map((e) => {
          return { ...e, flag: true };
        }),
      };

    //// ELEMTN SETORS
    case "SET_CURRENT_ELEMENT":
      return update(state, {
        currentElement: { $merge: action.payload },
      });
    case "SET_BG_COLOR":
      return update(state, {
        currentElement: { bg: { $set: action.payload } },
      });
    case "SET_FG_COLOR":
      return update(state, {
        currentElement: { fg: { $set: action.payload } },
      });
    case "LEFT_MENU_STATUS/ENABLE_ELEMENT_OPTIONS":
      return update(state, { isElementSelected: { $set: action.payload } });
    case "LEFT_MENU_STATUS/RESET/DISABLE_ELEMENT_OPTIONS":
      return update(state, {
        isElementSelected: { $set: false },
        currentElement: { $set: state.initElement },
        fgcolor: { $set: state.globalcolors.find((e) => 255 === e.colorId) },
        bgcolor: { $set: state.globalcolors.find((e) => 0 === e.colorId) },
      });
    case "UPDATE_CURRENT_ELEMENT":
      return update(state, {
        currentElement: { $set: action.payload.curCard },
        orignIndex: { $set: action.payload.oringIndex },
      });
    case "SET_TEXT_STYLE":
      return update(state, {
        currentElement: { style: { $push: [action.payload] } },
      });
    case "REMOVE_TEXT_STYLE":
      return update(state, {
        currentElement: { style: { $splice: [[action.payload.index, 1]] } },
      });
    case "PSONE/CHANGE_EDIT_MOD_STATUS":
      return update(state, {
        status: { $set: action.payload },
      });
    case "SELECT_LINE":
      return update(state, {
        selectedLine: { $set: action.payload },
      });
    case CHANGETEXT: {
      return update(state, {
        currentElement: { sequences: { $set: action.payload } },
      })
    }
  }
  return state;
}

/// AC
export const getFgColor = (payload) => {
  return {
    type: "SET_FG_COLOR",
    payload: payload,
  };
};

export const getBgColor = (payload) => {
  return {
    type: "SET_BG_COLOR",
    payload: payload,
  };
};
export const changeSelection = (payload) => {
  return {
    type: "LEFT_MENU_STATUS/ENABLE_ELEMENT_OPTIONS",
    payload,
  };
};
export const setCurrentElement = (payload) => {
  return { type: "SET_CURRENT_ELEMENT", payload };
};
export const resetOptions = () => {
  return { type: "LEFT_MENU_STATUS/RESET/DISABLE_ELEMENT_OPTIONS" };
};
export const openControl = (payload) => {
  return { type: "OPEN_CURRENT_CONTROL", payload };
};
export const closeControl = (payload) => {
  return { type: "CLOSE_CURRENT_CONTROL", payload };
};
export const updateElement = (payload) => {
  return { type: "UPDATE_CURRENT_ELEMENT", payload };
};

export const setElementStyle = (payload) => {
  return { type: "SET_TEXT_STYLE", payload };
};
export const removeElemtStyle = (payload) => {
  return { type: "REMOVE_TEXT_STYLE", payload };
};

export const changeModeStatus = (payload) => {
  return { type: "PSONE/CHANGE_EDIT_MOD_STATUS", payload };
};
export const closeAllControls = () => {
  return { type: "CLOSE_ALL_CONTROLS" };
};
export const selectPsOneLine = (payload) => {
  return { type: "SELECT_LINE", payload };
};

/**
 * @description Change custom text sequences
*/
export const ChangeCustomText = (payload: string) => {
  return { type: CHANGETEXT, payload }
}