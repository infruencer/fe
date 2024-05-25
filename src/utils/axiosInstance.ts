'use client';

import { NETWORK } from '@/constants/api';
import store from '@/redux/store';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: NETWORK.TIMEOUT,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!config.headers || config.headers.Authorization) return config;

    const state = store.getState();
    const { accessToken } = state.auth;
    if (!accessToken) {
      throw new Error('token not found');
    }
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
