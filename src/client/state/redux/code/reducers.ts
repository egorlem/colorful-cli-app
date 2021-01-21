import { ICodeStete, ICodeLine } from './types';
import { combineReducers } from 'redux';
import update from 'immutability-helper';
import types from "./action.types"
import { composePromptResult } from '../../../api/coreapi';

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
    case "TEST_FROM_API":
      return update(state, {
        variableList: { $set: action.payload.fromapi.variableList },
        psonestring: { $set: action.payload.fromapi.psonestring }
      })
    default:
      return state;
  }
}

export const testFromApi = (toapi) => async (dispatch) => {
  const fromapi = await composePromptResult(toapi)
  if (fromapi) {
    dispatch({ type: "TEST_FROM_API", payload: { fromapi: fromapi } })
  }
}


const reducer = combineReducers({
  code: code,
})
export default reducer