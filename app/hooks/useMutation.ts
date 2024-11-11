import { useCallback, useState } from "react";

interface UseMutationOptions<T, E = Error> {
  onSuccess?: (data: T) => void;
  onError?: (error: E) => void;
}

interface MutationResult<T, E = Error> {
  data: T | null;
  isLoading: boolean;
  error: E | null;
  mutate: (data: any) => Promise<void>;
}

export function useMutation<T, E = Error>(
  mutationFn: (data: any) => Promise<T>,
  options: UseMutationOptions<T, E> = {}
): MutationResult<T, E> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<E | null>(null);

  const mutate = useCallback(
    async (inputData: any) => {
      setIsLoading(true);
      try {
        const result = await mutationFn(inputData);
        setData(result);
        setError(null);
        options.onSuccess?.(result);
      } catch (err) {
        setError(err as E);
        setData(null);
        options.onError?.(err as E);
      } finally {
        setIsLoading(false);
      }
    },
    [mutationFn, options.onSuccess, options.onError]
  );

  return { data, isLoading, error, mutate };
}
