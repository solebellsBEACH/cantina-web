import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/user';
import { applicationReducer } from './slices/application';
import { productsReducer } from './slices/products';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        application: applicationReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
