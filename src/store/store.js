import { compose, } from "@reduxjs/toolkit";
import { createStoreHook } from "react-redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import  logger  from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = createStoreHook(rootReducer,undefined,composedEnhancers)