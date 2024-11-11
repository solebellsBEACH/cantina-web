import { createSelector } from 'reselect';
import { RootState } from '../store'; // Certifique-se de que o RootState está corretamente importado do seu store

// Selector para pegar o usuário do estado
export const selectUser = (state: RootState) => state.user;

// Selector para verificar se está carregando
export const selectUserLoading = (state: RootState) => state.user.loading;

// Selector para pegar o erro, se houver
export const selectUserError = (state: RootState) => state.user.error;

// Um exemplo de selector usando reselect para um valor computado
export const selectIsUserLoggedIn = createSelector(
    [selectUser],
    (user) => user !== null // Retorna true se o usuário estiver logado
);
