import { IAppCondition } from './types';
import types from './action.types'

// App status
/**@description any*/
const changeModeStatus = (payload: string | null): IAppCondition => {
  return { type: types.CHANGEMODSTATUS, payload };
};
const openControl = (payload: string): IAppCondition => {
  return { type: types.OPENCONTROL, payload };
};
const closeControl = (payload: string): IAppCondition => {
  return { type: types.CLOSECONTROL, payload };
};
const closeAllControls = (): IAppCondition => {
  return { type: types.CLOSEALLCONTROLS };
};

const changeLoadStatus = (payload: boolean): IAppCondition => {
  return { type: types.CHANGELOADSTATUS, payload }
}

export default { changeModeStatus, openControl, closeControl, closeAllControls, changeLoadStatus } 
