import { globalcolors } from "./techstate/colors";
import { psOneSequences } from "./techstate/promptsequences";
import update from "immutability-helper";

let initialState = {
  activeControls: [
    { name: "elementMenu", isOpen: true },
    { name: "bgColorMenu", isOpen: true },
    { name: "fgColorMenu", isOpen: true },
  ],
  globalcolors: globalcolors,
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
  isElementSelected: false,
  psOneSequences: psOneSequences,
  currentElement: {},
};

export function psOneOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case "OPEN_CURRENT_CONTROL":
      return {
        ...state,
        activeControls: state.activeControls.map((e) =>
          e.name === action.payload ? { ...e, isOpen: true } : e
        ),
      };
    case "CLOSE_CURRENT_CONTROL":
      return {
        ...state,
        activeControls: state.activeControls.map((e) =>
          e.name === action.payload ? { ...e, isOpen: false } : e
        ),
      };
    case "GET_BG_COLOR":
      return {
        ...state,
        bgcolor: state.globalcolors.find((e) => +action.payload === e.colorId),
        currentElement: {
          ...state.currentElement,
          bg: state.globalcolors.find((e) => +action.payload === e.colorId),
        },
      };
    case "GET_FG_COLOR":
      return {
        ...state,
        fgcolor: state.globalcolors.find((e) => +action.payload === e.colorId),
        currentElement: {
          ...state.currentElement,
          fg: state.globalcolors.find((e) => +action.payload === e.colorId),
        },
      };
    case "LEFT_MENU_STATUS/CHANGE_ELEMENT_SELECTION_STATUS":
      return update(state, { isElementSelected: { $set: action.payload } });
    case "SET_CURRENT_ELEMENT":
      return update(state, {
        currentElement: { $set: action.payload },
      });
    case "RESET_PSONE_OPTIONS_MENU":
      return update(state, {
        isElementSelected: { $set: false },
        currentElement: { $set: {} },
        fgcolor: { $set: state.globalcolors.find((e) => 255 === e.colorId) },
        bgcolor: { $set: state.globalcolors.find((e) => 0 === e.colorId) },
      });
  }
  return state;
}

/// AC
export const getFgColor = (payload) => {
  return {
    type: "GET_FG_COLOR",
    payload: payload,
  };
};

export const getBgColor = (payload) => {
  return {
    type: "GET_BG_COLOR",
    payload: payload,
  };
};
export const changeSelection = (payload) => {
  return {
    type: "LEFT_MENU_STATUS/CHANGE_ELEMENT_SELECTION_STATUS",
    payload,
  };
};
export const setCurrentElement = (payload) => {
  return { type: "SET_CURRENT_ELEMENT", payload };
};
export const resetOptions = () => {
  return { type: "RESET_PSONE_OPTIONS_MENU" };
};
export const openControl = (payload) => {
  return { type: "OPEN_CURRENT_CONTROL", payload };
};
export const closeControl = (payload) => {
  return { type: "CLOSE_CURRENT_CONTROL", payload };
};
