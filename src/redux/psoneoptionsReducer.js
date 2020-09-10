import { globalcolors } from "./techstate/colors";
import update from "immutability-helper";

let initialState = {
  mode: "",
  newPromptEl: {
    id: null,
    text: "init",
    sequences: "init",
    code: "init",
    bg: "",
    fg: "",
  },
  targetPromptEl: {},
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
};

export function psOneOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_BG_COLOR":
      return {
        ...state,
        bgcolor: state.globalcolors.find((e) => +action.payload === e.colorId),
      };
    case "GET_FG_COLOR":
      return {
        ...state,
        fgcolor: state.globalcolors.find((e) => +action.payload === e.colorId),
      };
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

export const isColorInfoOpen = () => {
  return {};
};
