import { combineReducers } from "redux";
import { psOneOptionsReducer } from "./psoneoptionsReducer";
import { resultReducer } from "./resultReducer";
import { promptReaducer } from "./promptReducer";

export const rootReducer = combineReducers({
  init: psOneOptionsReducer,
  result: resultReducer,
  promptline: promptReaducer,
});
