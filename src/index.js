import "./style/style.scss";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import logger from "redux-logger";
const store = createStore(rootReducer, applyMiddleware(logger));
