import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { saveState, loadState } from "./localstorage/localstorage";
import logger from "redux-logger";

const persistedState = loadState();

//applyMiddleware(logger)
export const store = createStore(rootReducer, applyMiddleware(logger));
/*
store.subscribe(() => {
  saveState({
    result: store.getState().result,
  });
});
*/
