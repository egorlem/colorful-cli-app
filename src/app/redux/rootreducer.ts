import { combineReducers } from "redux";
import { psOneOptionsReducer } from "./psoneoptionsreducer";
import { resultReducer } from "./resultreducer";
import { termWinReaducer } from "./termwinreducer";
import { codeReducer } from "./codereducer";

export const rootReducer = combineReducers({
  psOneOptions: psOneOptionsReducer,
  termWin: termWinReaducer,
  result: resultReducer,
  code: codeReducer,
});
