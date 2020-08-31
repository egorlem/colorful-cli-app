import { combineReducers } from "redux";
import { initReduser } from "./initReducer";
import { termSetReducer } from "./termsetingsReducer";
import { resultReducer } from "./resultReducer";

export const rootReducer = combineReducers({
  init: initReduser,
  term: termSetReducer,
  result: resultReducer,
});
