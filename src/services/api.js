import axios from 'axios';
import { loadTokenFromStorage } from '../store/auth/slice';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = loadTokenFromStorage();
  if (!token) return config;
  config.headers['Authorization'] = token;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export { api };
