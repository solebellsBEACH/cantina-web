import { createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import httpInstance from '../../services/api/httpInstance';
import { Product } from '../../interfaces/entities/product';


interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
    count: number;
    totalPages: number;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
    count: 0,
    totalPages: 0,
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (params: { page: number; limit: number; name?: string; price?: number }, thunkAPI) => {
        try {
            const response = await httpInstance.get('/products', {
                params: {
                    page: params.page,
                    limit: params.limit,
                    name: params.name,
                    price: params.price,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Erro ao buscar produtos');
        }
    }
);

const reducers = {}

const extraReducers = (builder: ActionReducerMapBuilder<ProductsState>) => {
    builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.items;
            state.count = action.payload.count;
            state.totalPages = action.payload.totalPages;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
};


export default { reducers, initialState, extraReducers }