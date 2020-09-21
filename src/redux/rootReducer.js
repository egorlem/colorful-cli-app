import { combineReducers } from "redux";
import { psOneOptionsReducer } from "./psOneOptionsReducer";
import { resultReducer } from "./resultReducer";
import { termWinReaducer } from "./termWinReducer";

export const rootReducer = combineReducers({
  psOneOptions: psOneOptionsReducer,
  termWin: termWinReaducer,
  result: resultReducer,
});
