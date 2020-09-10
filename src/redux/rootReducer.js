import { combineReducers } from "redux";
import { psOneOptionsReducer } from "./psoneoptionsReducer";
import { termSetReducer } from "./termsetingsReducer";
import { resultReducer } from "./resultReducer";
import { psoneReducer } from "./interactionReducer";
import { promptReaducer } from "./promptReducer";

export const rootReducer = combineReducers({
  init: psOneOptionsReducer,
  term: termSetReducer,
  result: resultReducer,
  psone: psoneReducer,
  promptline: promptReaducer,
});
