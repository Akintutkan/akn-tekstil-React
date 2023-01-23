import React from "react";
import ReactDOM from "react-dom/client";
// import {render} from "react-dom";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { userProvider } from "./contexts/user.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <userProvider>
        <App />
      </userProvider>
    </Router>
  </React.StrictMode>
);
