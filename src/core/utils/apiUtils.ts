const apiKey = import.meta.env.VITE_API_KEY;

export const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'XAPIKEY': apiKey,
  },
  credentials: 'include',
};

export const getResponseData = (response: Response) => {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response.json();
};