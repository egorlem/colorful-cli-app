import "./style/style.scss";
import { store } from "./redux/store";
// components
import {} from "./components/termotions";
import {} from "./components/appgglobalevents";

window.store = store;
let state = store.getState();
