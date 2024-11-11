import { User } from "../../interfaces/entities/user";

const USER_KEY = 'user';

const saveUser = (user: User) => {
    try {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch (error) {
        console.error('Erro ao salvar o usuário no localStorage', error);
    }
};

const getUser = (): User | null => {
    try {
        const storedUser = localStorage.getItem(USER_KEY);
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error('Erro ao obter o usuário do localStorage', error);
        return null;
    }
};

const removeUser = () => {
    try {
        localStorage.removeItem(USER_KEY);
    } catch (error) {
        console.error('Erro ao remover o usuário do localStorage', error);
    }
};

export const LocalStorageUtils = { saveUser, getUser, removeUser }