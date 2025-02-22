import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
});

export const queryClient = new QueryClient();

export default apiClient;
