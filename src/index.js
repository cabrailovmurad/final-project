
import React from "react";
import { Provider } from "react-redux";
import App from "./components/app/App";
import {store} from "./store";
import { BrowserRouter } from "react-router-dom";

const { createRoot } = require("react-dom/client");

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
  <App />
  </BrowserRouter>
</Provider>
);
