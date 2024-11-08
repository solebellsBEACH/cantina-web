import { Product } from "../../interfaces/entities/product";
import httpInstance from "./httpInstance";


export interface GetAllProductsParams {
    page?: number;
    limit?: number;
    name?: string;
    price?: number;
    establishmentId?: number;
}

export interface GetAllProductsResponse {
    products: Product[];
    count: number;
    totalPages: number;
    next?: string;
    previous?: string;
}

export const getAllProducts = async (params?: GetAllProductsParams): Promise<GetAllProductsResponse> => {
    try {
        const response = await httpInstance.get<GetAllProductsResponse>('/products', { params });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
    }
};