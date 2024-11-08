import { createSlice } from "@reduxjs/toolkit";
import UserCore from "../reducers/user"

const userSlice = createSlice({
    name: 'user',
    ...UserCore
});


export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
