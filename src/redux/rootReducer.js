import { combineReducers } from "redux";
import { psOneOptionsReducer } from "./psOneOptionsReducer";
import { resultReducer } from "./resultReducer";
import { termWinReaducer } from "./termWinReducer";
import { codeReducer } from "./codeReducer";

export const rootReducer = combineReducers({
  psOneOptions: psOneOptionsReducer,
  termWin: termWinReaducer,
  result: resultReducer,
  code: codeReducer,
});
