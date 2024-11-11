import { RootState } from '../store'; // Importar o tipo do estado root (global)

export const selectOrders = (state: RootState) => state.orders.orders; // Seleciona todos os pedidos
export const selectOrderById = (state: RootState, orderId: number) =>
    state.orders.orders.find(order => order.id === orderId); // Seleciona um pedido específico pelo ID
export const selectOrdersLoading = (state: RootState) => state.orders.loading; // Seleciona o estado de carregamento
export const selectOrdersError = (state: RootState) => state.orders.error; // Seleciona o erro (se houver)
export const selectOrderCount = (state: RootState) => state.orders.count; // Seleciona o número total de pedidos
export const selectTotalPages = (state: RootState) => state.orders.totalPages; // Seleciona o número total de páginas
