const apiKey = import.meta.env.VITE_API_KEY;

export const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'XAPIKEY': apiKey,
  },
  credentials: 'include',
};

export const getResponseData = async (res: Response) => {
  if (!res.ok && res.status !== 400) {
    return Promise.reject(res);
  }
  return await res.json();
};