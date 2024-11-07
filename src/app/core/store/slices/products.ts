import { createSlice } from "@reduxjs/toolkit";
import ProductsCore from "../reducers/products"

const productsSlice = createSlice({
    name: 'products',
    ...ProductsCore
});


export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
