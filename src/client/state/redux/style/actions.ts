import types from "./action.types"
import { IEColor, IPromptElem } from '../../../types/global';
import { IPsOneStyle, IPsOneCondition, ISequences } from './types'

// element style crud actions
/** @description Change or add to element's foregraound color*/
export const getFgColor = <T extends IEColor>(payload: T): IPsOneStyle => {
  return {
    type: types.SETFGCOLOR,
    payload,
  };
};
/** @description Change or add element's background color*/
export const getBgColor = <T extends IEColor>(payload: T): IPsOneStyle => {
  return {
    type: types.SETBGCOLOR,
    payload,
  };
};
/** @description Add text decoration to element*/
export const setElementStyle = (payload: any): IPsOneStyle => {
  return { type: types.SETTEXTDECOR, payload };
};
/** @description Remove element's decoration*/
export const removeElemtStyle = (payload: number): IPsOneStyle => {
  return { type: types.REMOVETEXTDECOR, payload };
};
/**@description Change custom text sequences*/
export const ChangeCustomText = (payload: string): IPsOneStyle => {
  return { type: types.CHANGETEXT, payload }
}

// psone condition actions
/** @description Set current element for modification*/
export const setCurrentElement = <T extends ISequences>(payload: T): IPsOneCondition => {
  return { type: types.SETCURELEM, payload };
};
/** @description Applies settings to the current element*/
export const updateElement = (payload: {
  curCard: IPromptElem
  oringIndex: number
}): IPsOneCondition => {
  return { type: types.UPDATECURELEM, payload };
};
export const selectPsOneLine = (payload: number): IPsOneCondition => {
  return { type: types.SETLINE, payload };
};
/**@description Set current element to initial value */
export const resetOptions = (): IPsOneCondition => {
  return { type: types.SETELEMTOINIT };
};
export default {
  getFgColor, getBgColor, setElementStyle, removeElemtStyle, ChangeCustomText,
  setCurrentElement, updateElement, selectPsOneLine, resetOptions
}
// // App status
// /**@description any*/
// export const changeModeStatus = (payload: string | null): IAppStatus => {
//   return { type: types.CHANGEMODSTATUS, payload };
// };
// export const openControl = (payload: string): IAppStatus => {
//   return { type: types.OPENCONTROL, payload };
// };
// export const closeControl = (payload: string): IAppStatus => {
//   return { type: types.CLOSECONTROL, payload };
// };
// export const closeAllControls = (): IAppStatus => {
//   return { type: types.CLOSEALLCONTROLS };
// };
// /**@description Set current element to initial value */
// export const resetOptions = (): IAppStatus => {
//   return { type: types.SETELEMTOINIT };
// };


