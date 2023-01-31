import { combineReducers } from "@reduxjs/toolkit";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
user: userReducer,
categories: categoriesReducer
})