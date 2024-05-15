import { IResponse } from '@/interfaces/common.interface';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useRef, useState } from 'react';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;

/**
 * api 통신을 위한 커스텀 훅
 * @param config: axios 요청 데이터
 * @author 안가을
 */
export const useFetch: any = () => {
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const cancel = () => controllerRef.current.abort();

  const getToken = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  };

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      setLoading(true);
      const token = await getToken();
      console.log('tokentoken=> ', token);
      const result: AxiosResponse<IResponse> = await axios.request({
        ...params,
        headers: { ...params.headers, Authorization: `Bearer ${token}` },
        baseURL: API_BASE_URL,
        signal: controllerRef.current.signal,
      });
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  // const fetchQuery = (key: string, axiosOptions: AxiosRequestConfig): UseQueryResult<T, Error> => {
  //   return useQuery<T, Error>(key, () => fetchData(axiosOptions), {
  //     refetchOnWindowFocus: false,
  //   });
  // };
  return { cancel, fetch: fetchData, loading };
};
