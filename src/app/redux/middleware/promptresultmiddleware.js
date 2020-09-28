import { composePrmopt } from "./composePromptResult";
import { setResultCodeLine } from "../codeReducer";

export function composePromptResultMiddleware({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      if (action.type === "GET_RESULT_CODE_LINE") {
        let resPsOneline = getState().result.resPsOneLine;
        let codeline = composePrmopt(resPsOneline);
        dispatch(setResultCodeLine({ codeline }));
      }
      return next(action);
    };
  };
}
