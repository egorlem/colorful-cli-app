import { IEColor, IPromptElem } from './../types/global';
import {
  IPsOneElmStyleActions, IPsOneLineActions, ISequences, IAppStatus, IpsOneOptionsState
} from './../types/redux';
import { globalcolors } from "./techstate/colors";
import { psOneSequences } from "./techstate/promptsequences";
import { textdecoration } from "./techstate/textdecoration";
import { unicode } from "./techstate/unicode";
import update from "immutability-helper";
import {
  SETFGCOLOR, SETBGCOLOR, CHANGETEXT, SETTEXTDECOR, REMOVETEXTDECOR, SETCURELEM,
  UPDATECURELEM, CHANGEMODSTATUS, SETLINE, SETELEMTOINIT, CLOSEALLCONTROLS, CLOSECONTROL,
  OPENCONTROL
} from './actiontypes'

let initialState: IpsOneOptionsState = {
  selectedLine: 0,
  status: null,
  activeControls: [
    { name: "elementMenu", flag: false },
    { name: "bgColorMenu", flag: true },
    { name: "fgColorMenu", flag: true },
    { name: "symbolMenu", flag: false },
  ],
  initialElement: {
    id: null,
    options: null,
    text: '',
    sequences: '',
    code: '',
    style: [],
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

type optionReduser = IPsOneElmStyleActions | IPsOneLineActions | IAppStatus
interface IMenuControl {
  name: string
  flag: boolean
}

export function psOneOptionsReducer(state = initialState, action: optionReduser): IpsOneOptionsState {
  switch (action.type) {
    case SETCURELEM:
      return update(state, {
        currentElement: { $merge: action.payload },
      });
    case REMOVETEXTDECOR:
      return update(state, {
        currentElement: { style: { $splice: [[action.payload, 1]] } },
      });
    case SETBGCOLOR:
      return update(state, {
        currentElement: { bg: { $set: action.payload } },
      });
    case SETFGCOLOR:
      return update(state, {
        currentElement: { fg: { $set: action.payload } },
      });
    case SETTEXTDECOR:
      return update(state, {
        currentElement: { style: { $push: [action.payload] } },
      });
    case UPDATECURELEM:
      return update(state, {
        currentElement: { $set: action.payload.curCard },
        orignIndex: { $set: action.payload.oringIndex },
      });
    case OPENCONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: IMenuControl) =>
          e.name === action.payload ? { ...e, flag: false } : e
        ),
      };
    case CLOSECONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: IMenuControl) =>
          e.name === action.payload ? { ...e, flag: true } : e
        ),
      };
    case CLOSEALLCONTROLS:
      return {
        ...state,
        activeControls: state.activeControls.map((e: IMenuControl) => {
          return { ...e, flag: true };
        }),
      };
    case SETELEMTOINIT:
      return update(state, {
        //      isElementSelected: { $set: false },
        currentElement: { $set: state.initialElement },
        // fgcolor: { $set: state.globalcolors.find((e) => 255 === e.colorId) },
        // bgcolor: { $set: state.globalcolors.find((e) => 0 === e.colorId) },
      });
    case CHANGEMODSTATUS: // DONE
      return update(state, {
        status: { $set: action.payload },
      });
    case SETLINE:
      return update(state, {
        selectedLine: { $set: action.payload },
      });
    case CHANGETEXT: {
      return update(state, {
        currentElement: { sequences: { $set: action.payload } },
      })
    }
    default:
      return state;
  }
}
// Stylize element
/** @description Change or add to element's foregraound color*/
export const getFgColor = (payload: IEColor): IPsOneElmStyleActions => {
  return {
    type: SETFGCOLOR,
    payload,
  };
};
/** @description Change or add element's background color*/
export const getBgColor = (payload: IEColor): IPsOneElmStyleActions => {
  return {
    type: SETFGCOLOR,
    payload,
  };
};
/** @description Add text decoration to element*/
export const setElementStyle = (payload: { style: string, code: string }): IPsOneElmStyleActions => {
  return { type: SETTEXTDECOR, payload };
};
/** @description Remove element's decoration*/
export const removeElemtStyle = (payload: number): IPsOneElmStyleActions => {
  return { type: REMOVETEXTDECOR, payload };
};
/**@description Change custom text sequences*/
export const ChangeCustomText = (payload: string): IPsOneElmStyleActions => {
  return { type: CHANGETEXT, payload }
}

// Modify
/** @description Set current element for modification*/
export const setCurrentElement = (payload: ISequences): IPsOneLineActions => {
  return { type: SETCURELEM, payload };
};
/** @description Applies settings to the current element*/
export const updateElement = (payload: {
  curCard: IPromptElem
  oringIndex: number
}): IPsOneLineActions => {
  return { type: UPDATECURELEM, payload };
};
export const selectPsOneLine = (payload: number): IPsOneLineActions => {
  return { type: SETLINE, payload };
};

// App status
/**@description any*/
export const changeModeStatus = (payload: string | null): IAppStatus => {
  return { type: CHANGEMODSTATUS, payload };
};
export const openControl = (payload: string): IAppStatus => {
  return { type: OPENCONTROL, payload };
};
export const closeControl = (payload: string): IAppStatus => {
  return { type: CLOSECONTROL, payload };
};
export const closeAllControls = (): IAppStatus => {
  return { type: CLOSEALLCONTROLS };
};
/**@description Set current element to initial value */
export const resetOptions = (): IAppStatus => {
  return { type: SETELEMTOINIT };
};



