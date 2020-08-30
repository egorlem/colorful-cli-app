import { combineReducers } from "redux";
import { initReduser } from "./initReducer";
import { termSetReducer } from "./termsetingsReducer";

export const rootReducer = combineReducers({
  init: initReduser,
  term: termSetReducer,
});
