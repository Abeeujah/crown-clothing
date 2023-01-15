// Config Details..
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import categoriesReducer from "./categories/categories.reducer";
import cartReducer from "./cart/cart.reducer";

// Combine Reducers..
export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducer,
    cart: cartReducer,
});