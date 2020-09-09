import { combineReducers } from "redux";
import { initReduser } from "./initReducer";
import { termSetReducer } from "./termsetingsReducer";
import { resultReducer } from "./resultReducer";
import { psoneReducer } from "./interactionReducer";
import { promptReaducer } from "./promptreducer";

export const rootReducer = combineReducers({
  init: initReduser,
  term: termSetReducer,
  result: resultReducer,
  psone: psoneReducer,
  promptline: promptReaducer,
});
