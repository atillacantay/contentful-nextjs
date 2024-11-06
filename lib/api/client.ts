const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface FetchOptions extends RequestInit {
  body?: BodyInit | null;
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
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
