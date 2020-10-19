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
        // console.log("wm");
        dispatch(setResultCodeLine(a));
      }
      return next(action);
    };
  };
}

function test() {
  return {};
}

test();

class LongClassNeme {
  constructor() {
    this.name = "";
  }
}

let name = new LongClassNeme();

const test = 10;
