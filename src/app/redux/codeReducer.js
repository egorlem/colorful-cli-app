import update from "immutability-helper";

let initialState = {
  init: {},
  basePsOneVar: "PS1=",
  esc: "\\033",
  codeline: [],
  bgVariables: [],
  fgVariables: [],
};

export function codeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULT_CODE_LINE":
      return update(state, {
        codeline: { $set: action.payload.codeline.promptString },
        bgVariables: { $set: action.payload.codeline.bg },
        fgVariables: { $set: action.payload.codeline.fg },
      });
  }
  return state;
}

export const getResultCodeLine = () => {
  return { type: "GET_RESULT_CODE_LINE" };
};
export const setResultCodeLine = (payload) => {
  return { type: "SET_RESULT_CODE_LINE", payload };
};
