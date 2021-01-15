import { IAddCondition } from './types';
import types from './action.types'

// App status
/**@description any*/
export const changeModeStatus = (payload: string | null): IAddCondition => {
  return { type: types.CHANGEMODSTATUS, payload };
};
export const openControl = (payload: string): IAddCondition => {
  return { type: types.OPENCONTROL, payload };
};
export const closeControl = (payload: string): IAddCondition => {
  return { type: types.CLOSECONTROL, payload };
};
export const closeAllControls = (): IAddCondition => {
  return { type: types.CLOSEALLCONTROLS };
};
export default { changeModeStatus, openControl, closeControl, closeAllControls }