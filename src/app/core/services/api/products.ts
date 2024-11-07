import httpInstance from "./httpInstance";

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    establishmentId: number;
    image_url: string
}

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
