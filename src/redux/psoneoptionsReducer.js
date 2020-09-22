import { globalcolors } from "./techstate/colors";
import { psOneSequences } from "./techstate/promptsequences";
import { textdecoration } from "./techstate/textdecoration";
import update from "immutability-helper";

let initialState = {
  initElement: {
    id: null,
    text: null,
    sequences: null,
    code: null,
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
      colorInfo: false,
      colorId: 255,
      hexString: "#eeeeee",
      rgb: { r: 238, g: 238, b: 238 },
      hsl: { h: 0, s: 0, l: 93 },
      name: "Grey93",
    },
  },
  activeControls: [
    { name: "elementMenu", isOpen: true },
    { name: "bgColorMenu", isOpen: true },
    { name: "fgColorMenu", isOpen: true },
  ],
  globalcolors: globalcolors,
  textdecoration: textdecoration,
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
  currentElement: {
    id: null,
    text: null,
    sequences: null,
    code: null,
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
      colorInfo: false,
      colorId: 255,
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

    //// ELEMTN SETORS
    case "SET_CURRENT_ELEMENT":
      return update(state, {
        currentElement: { $merge: action.payload },
      });
    case "SET_BG_COLOR":
      return {
        ...state,
        currentElement: {
          ...state.currentElement,
          bg: state.globalcolors.find((e) => +action.payload === e.colorId),
        },
      };
    case "SET_FG_COLOR":
      return {
        ...state,
        currentElement: {
          ...state.currentElement,
          fg: state.globalcolors.find((e) => +action.payload === e.colorId),
        },
      };
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
        currentElement: { $set: action.payload },
        isElementSelected: { $set: true },
      });
    case "SET_TEXT_STYLE":
      return update(state, {
        currentElement: { style: { $push: [action.payload] } },
      });
    case "REMOVE_TEXT_STYLE":
      return update(state, {
        currentElement: { style: { $splice: [[action.payload.index, 1]] } },
      });
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
  console.log(payload);
  return { type: "REMOVE_TEXT_STYLE", payload };
};
