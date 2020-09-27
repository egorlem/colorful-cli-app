import "./style/style.scss";
import { store } from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
