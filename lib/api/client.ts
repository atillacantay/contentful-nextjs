const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchOptions extends RequestInit {
  body?: BodyInit | null;
}

interface ErrorBody {
  success: boolean;
  error: string;
}

export async function apiClient<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const url = `${BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const errorBody: ErrorBody = await response.json();
    throw new Error(`${errorBody?.error || response.statusText}`);
  }

  return response.json() as Promise<T>;
}
