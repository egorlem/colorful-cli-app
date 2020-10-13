import { composePrmopt, cmp } from "./composePromptResult";
import { setResultCodeLine } from "../codeReducer";

export function composePromptResultMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (action.type === "GET_RESULT_CODE_LINE") {
        const {
          result: { resPsOneLine },
        } = getState();
        let a = cmp(resPsOneLine);
        dispatch(setResultCodeLine(a));
      }
      return next(action);
    };
  };
}
