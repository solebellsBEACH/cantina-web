// services/httpInstance.ts
import axios from 'axios';

const httpInstance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

httpInstance.interceptors.request.use(
    (config) => {
        // const token = localStorage.getItem('token');
        // if (token && config.headers) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpInstance.interceptors.response.use(
    (response) => response,
    (error) => {

        if (error.response?.status === 401) {
            console.error('Não autorizado. Redirecionando para login.');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default httpInstance;
