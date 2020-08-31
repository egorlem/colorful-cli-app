import "./style/style.scss";
import { store } from "./redux/store";
// components
import {} from "./components/termotions";
import {} from "./components/appgglobalevents";
import {} from "./components/result/result";

window.store = store;
let state = store.getState();
