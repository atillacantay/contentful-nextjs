import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

interface UseAuthApiReturn<T, R> {
  data: T | undefined;
  error: string | null;
  isLoading: boolean;
  post: (
    path: string,
    data?: R,
    config?: AxiosRequestConfig,
    onSuccess?: (response: AxiosResponse<T>) => void,
    onError?: (
      error: AxiosError<string>,
      setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => void
  ) => Promise<void>;
}

const useAuthApi = <T = unknown, R = unknown>(): UseAuthApiReturn<T, R> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const post = async (
    path: string,
    data?: R,
    config?: AxiosRequestConfig,
    onSuccess?: (response: AxiosResponse<T>) => void,
    onError?: (
      error: AxiosError<string>,
      setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => void
  ) => {
    setIsLoading(true);
    axios
      .post<R, AxiosResponse<T>>(path, data, config)
      .then((result) => {
        setData(result.data);

        if (onSuccess) {
          onSuccess(result);
        }
      })
      .catch((error) => {
        const axiosError = error as AxiosError<string>;
        if (onError) {
          onError(axiosError, setError);
        } else {
          setError(axiosError.message || "An error occured");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    data,
    error,
    isLoading,
    post,
  };
};

export default useAuthApi;
