import "./style/style.scss";
import { store } from "./redux/store";
// components
import {} from "./components/termotions";
import {} from "./components/appgglobalevents";
import {} from "./components/result/result";
import {} from "./components/interactionsetings/interaction";

window.store = store;
let state = store.getState();
