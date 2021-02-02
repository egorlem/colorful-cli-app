import types from "./action.types"
import { IEColor, IPromptElem } from '../../../types/global';
import { IPsOneStyle, IPsOneCondition, ISequences } from './types'


// app init actions
/**@description sel color pallete from server*/
const setColorsList = (payload: IEColor[]): IPsOneStyle => {
  return { type: types.SETCOLORSLIST, payload }
}

// element style crud actions
/** @description Change or add to element's foregraound color*/
const getFgColor = <T extends IEColor>(payload: T): IPsOneStyle => {
  return {
    type: types.SETFGCOLOR,
    payload,
  };
};

/** @description Change or add element's background color*/
const getBgColor = <T extends IEColor>(payload: T): IPsOneStyle => {
  return {
    type: types.SETBGCOLOR,
    payload,
  };
};
/** @description Add text decoration to element*/
const setElementStyle = (payload: any): IPsOneStyle => {
  return { type: types.SETTEXTDECOR, payload };
};
/** @description Remove element's decoration*/
const removeElemtStyle = (payload: number): IPsOneStyle => {
  return { type: types.REMOVETEXTDECOR, payload };
};
/**@description Change custom text sequences*/
const ChangeCustomText = (payload: string): IPsOneStyle => {
  return { type: types.CHANGETEXT, payload }
}

// psone condition actions
/** @description Set current element for modification*/
const setCurrentElement = <T extends ISequences>(payload: T): IPsOneCondition => {
  return { type: types.SETCURELEM, payload };
};
/** @description Applies settings to the current element*/
const updateElement = (payload: {
  curCard: IPromptElem
  oringIndex: number
}): IPsOneCondition => {
  return { type: types.UPDATECURELEM, payload };
};
const selectPsOneLine = (payload: number): IPsOneCondition => {
  return { type: types.SETLINE, payload };
};
/**@description Set current element to initial value */
const resetOptions = (): IPsOneCondition => {
  return { type: types.SETELEMTOINIT };
};
/**@description Update element position */
const updatePosition = (payload: { atPosition: number }): IPsOneCondition => {
  return { type: types.UPDATEPOSITION, payload }
}
export default {
  setColorsList, getFgColor, getBgColor, setElementStyle, removeElemtStyle, ChangeCustomText,
  setCurrentElement, updateElement, selectPsOneLine, resetOptions, updatePosition
}
