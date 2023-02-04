import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";
import { store,persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

import "./index.scss";

const container = document.getElementById("root")
 const root = createRoot(container);
 root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading ={null} persistor={persistor}>
    <Router>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
