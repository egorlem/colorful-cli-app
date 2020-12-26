import update from 'immutability-helper';

let initialState = {
  init: {},
  basePsOneVar: 'PS1=',
  esc: '\\033',
  codeline: [],
  bgVar: [],
  fgVar: [],
  variableList: [],
  psonestring: [],
};

export function codeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_RESULT_CODE_LINE':
      //  return state;
      return update(state, {
        variableList: { $set: action.payload.variableList },
        psonestring: { $set: action.payload.psonestring },
      });
  }
  return state;
}

export const getResultCodeLine = () => {
  return { type: 'GET_RESULT_CODE_LINE' };
};
export const setResultCodeLine = (payload) => {
  return { type: 'SET_RESULT_CODE_LINE', payload };
};
/* Comment */
