import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";

import "index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.querySelector("#root")
);
