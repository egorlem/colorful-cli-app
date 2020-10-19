import update from "immutability-helper";

let initialState = {
  init: {},
  basePsOneVar: "PS1=",
  esc: "\\033",
  codeline: [],
  bgVar: [],
  fgVar: [],
  toCB: [],
};

export function codeReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULT_CODE_LINE":
      //  return state;
      return update(state, {
        toCB: { $set: action.payload.pscbline },
      });
  }
  return state;
}

export const getResultCodeLine = () => {
  return { type: "GET_RESULT_CODE_LINE" };
};
export const setResultCodeLine = (payload) => {
  console.log(payload);
  return { type: "SET_RESULT_CODE_LINE", payload };
};
/* Comment */
