import { createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import httpInstance from '../../services/api/httpInstance';

export interface Order {
    id: number;
    userId: number;
    productId: number;
    status: 'Pending' | 'Completed' | 'Canceled'; // Defina os status possíveis do pedido
    qrCode: string;
    orderDateTime: string; // Data e hora do pedido no formato ISO string
    user?: {
        id: number;
        name: string;
        email: string;
        // Adicione outros campos que o usuário pode ter
    };
    product?: {
        id: number;
        name: string;
        price: number;
        description: string;
        // Adicione outros campos que o produto pode ter
    };
}


interface OrdersState {
    orders: Order[];
    loading: boolean;
    error: string | null;
    count: number;
    totalPages: number;
}

const initialState: OrdersState = {
    orders: [],
    loading: false,
    error: null,
    count: 0,
    totalPages: 0,
};

// Thunk para buscar pedidos
export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (params: { page?: number; limit?: number; userId?: number; status?: string }, thunkAPI) => {
        try {
            const response = await httpInstance.get('/orders', {
                params: {
                    page: params?.page || 1,
                    limit: params?.limit || 10,
                    userId: params.userId,
                    status: params.status,
                },
            });

            return response?.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Erro ao buscar pedidos');
        }
    }
);

// Thunk para criar um pedido
export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (orderData: { userId: number; productId: number; status: string; qrCode: string; orderDateTime: string }, thunkAPI) => {
        try {
            const response = await httpInstance.post('/orders', orderData);
            return response?.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Erro ao criar pedido');
        }
    }
);

const reducers = {}

const extraReducers = (builder: ActionReducerMapBuilder<OrdersState>) => {
    builder
        .addCase(fetchOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders = action.payload.data;
            state.count = action.payload.count;
            state.totalPages = action.payload.totalPages;
        })
        .addCase(fetchOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(createOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(createOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.orders.push(action.payload); // Adiciona o pedido criado ao estado
        })
        .addCase(createOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
};

export default { reducers, initialState, extraReducers };
