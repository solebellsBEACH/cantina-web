import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/entities/user";
import httpInstance from "../../services/api/httpInstance";
import { LocalStorageUtils } from "../../shared/utils/localStorage";

interface UserState {
    user: User | null
    loading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (params: { email: string }, thunkAPI) => {
        try {
            const response = await httpInstance.get('/user', {
                params: {
                    email: params.email,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data || 'Erro ao buscar Usuario');
        }
    }
);


const reducers = {}

const extraReducers = (builder: ActionReducerMapBuilder<UserState>) => {
    builder
        .addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action.payload)
            LocalStorageUtils.saveUser(action.payload.user)
            state.loading = false;
            state.user = action.payload.user;

        })
        .addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
};

export default { reducers, initialState, extraReducers }