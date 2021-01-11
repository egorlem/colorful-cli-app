import { ICodeStete, ICodeLine } from './types';
import { combineReducers } from 'redux';
import update from 'immutability-helper';
import types from "./action.types"

let initialState: ICodeStete = {
  init: {},
  basePsOneVar: 'PS1=',
  esc: '\\033',
  codeline: [],
  bgVar: [],
  fgVar: [],
  variableList: [],
  psonestring: [],
};

export function code(state = initialState, action: ICodeLine): ICodeStete {
  switch (action.type) {
    case types.SETCODE:
      return update(state, {
        variableList: { $set: action.payload.variableList },
        psonestring: { $set: action.payload.psonestring },
      });
    default:
      return state;
  }
}

const reducer = combineReducers({
  code: code,
})
export default reducer