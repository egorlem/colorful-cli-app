import { combineReducers } from "redux";
import { initReduser } from "./initReducer";

export const rootReducer = combineReducers({
  init: initReduser,
});

