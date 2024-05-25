'use client';

import { NETWORK } from '@/constants/api';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: NETWORK.TIMEOUT,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!config.headers || config.headers.Authorization) return config;

    const token = await fetch('/api/token').then((res) => res.json());
    if (!token) {
      throw new Error('token not found');
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
