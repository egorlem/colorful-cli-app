import "./style/style.scss";
import { store } from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { Provider } from "react-redux";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
