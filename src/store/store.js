import { compose, configureStore, } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import  logger  from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";


const persistConfig  = {
    key: "root",
    storage,
    whitelist: ["user"]
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV !== "production" && logger,thunk].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))
export const store = configureStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store)