import { composePromptResult } from "./composePromptResult";
import { setResultCodeLine } from "../codeReducer";

export function composePromptResultMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (action.type === "GET_RESULT_CODE_LINE") {
        let resPsOneline = getState().result.resPsOneLine;
        let codeline = composePromptResult(resPsOneline);
        dispatch(setResultCodeLine({ codeline: codeline }));
      }
      return next(action);
    };
  };
}
