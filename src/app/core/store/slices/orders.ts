import { createSlice } from "@reduxjs/toolkit";
import ProductsCore from "../reducers/orders"

const ordersSlice = createSlice({
    name: 'orders',
    ...ProductsCore
});


export const ordersActions = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
