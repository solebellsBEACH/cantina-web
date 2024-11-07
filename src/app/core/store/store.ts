import { configureStore } from '@reduxjs/toolkit';
import { applicationReducer } from './slices/application';
import { productsReducer } from './slices/products';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        application: applicationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
