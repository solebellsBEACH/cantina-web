import { createSlice } from '@reduxjs/toolkit';
import applicationCore from '../reducers/application';


const applicationSlice = createSlice({
    ...applicationCore,
    name: 'application'
});

export const applicationActions = applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
