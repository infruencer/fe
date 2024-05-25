import { axiosInstance } from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';
import { useRef, useEffect } from 'react';

interface FetchOptions<T> {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  params?: any;
  callback?: Record<number, string | Array<{ status: string; message: string }>>;
}

/**
 * api 통신을 위한 커스텀 훅
 * @param options
 */
const useFetch = <T,>() => {
  const controllerRef = useRef(new AbortController());

  const fetchData = async ({ url, method = 'get', params = null, callback = {} }: FetchOptions<T>): Promise<T> => {
    let result: AxiosResponse<T>;
    switch (method.toLowerCase()) {
      case 'get':
        result = await axiosInstance.get(url);
        break;
      case 'post':
        result = await axiosInstance.post(url, params);
        break;
      case 'put':
        result = await axiosInstance.put(url, params);
        break;
      case 'delete':
        result = await axiosInstance.delete(url);
        break;
      default:
        throw new Error('Invalid HTTP method');
    }

    handleResponse(result.status, result.data, callback);
    return result.data;
  };

  const handleResponse = (
    status: number,
    responseData: any,
    callback: Record<number, string | Array<{ status: string; message: string }>>,
  ) => {
    if (callback[status]) {
      const responseCallback = callback[status];
      if (Array.isArray(responseCallback)) {
        const matchedCallback = responseCallback.find(({ status: cbStatus }) => responseData?.status === cbStatus);
        if (matchedCallback) {
          console.log(`Status: ${matchedCallback.status}, Message: ${matchedCallback.message}`);
        }
      } else {
        console.log(responseCallback);
      }
    } else {
      switch (status) {
        case 200:
          console.log('Success');
          break;
        case 201:
          console.log('Created');
          break;
        case 400:
          console.log('Bad Request');
          break;
        case 401:
          console.log('Unauthorized');
          break;
        case 403:
          console.log('Forbidden');
          break;
        case 404:
          console.log('Not Found');
          break;
        case 500:
          console.log('Internal Server Error');
          break;
        default:
          console.log('Unknown status code:', status);
      }
    }
  };

  useEffect(() => {
    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return fetchData;
};

export default useFetch;
