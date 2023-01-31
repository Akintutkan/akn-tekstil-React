import { compose, configureStore, } from "@reduxjs/toolkit";
import { applyMiddleware } from "@reduxjs/toolkit";
// import  logger  from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) =>{
    if(!action.type){
        return next(action);
    }
    next(action)
}
const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares))
export const store = configureStore(rootReducer,undefined,composedEnhancers)