import { combineReducers } from 'redux';
import { IAddCondition, IGlobalAppCondition, ILeftMenuControls } from './types';
import types from './action.types'
import update from 'immutability-helper'

const initialState: IGlobalAppCondition = {
  currentshell: "bash",
  status: null,
  activeControls: [
    { name: "elementMenu", flag: false },
    { name: "bgColorMenu", flag: true },
    { name: "fgColorMenu", flag: true },
    { name: "symbolMenu", flag: false },
  ],
}

function appcondition(state = initialState, action: IAddCondition) {
  switch (action.type) {
    case types.OPENCONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) =>
          e.name === action.payload ? { ...e, flag: false } : e
        ),
      };
    case types.CLOSECONTROL:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) =>
          e.name === action.payload ? { ...e, flag: true } : e
        ),
      };
    case types.CLOSEALLCONTROLS:
      return {
        ...state,
        activeControls: state.activeControls.map((e: ILeftMenuControls) => {
          return { ...e, flag: true };
        }),
      };
    case types.CHANGEMODSTATUS: // DONE
      return update(state, {
        status: { $set: action.payload },
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  appcondition: appcondition
})
export default reducer