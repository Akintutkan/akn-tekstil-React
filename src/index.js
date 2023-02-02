import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import { store,persistor } from "./store/store";

import "./index.scss";


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading ={null} persistor={persistor}>
    <Router>
        <App />
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
