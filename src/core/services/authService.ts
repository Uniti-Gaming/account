import { ILoginForm } from '../interfaces/authInterface';

const apiUrl = import.meta.env.VITE_API_URL_AUTH;
const apiKey = import.meta.env.VITE_API_KEY;

const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'XAPIKEY': apiKey,
  },
  credentials: 'include' as RequestCredentials,
};

const getResponseData = async (res: Response) => {
  if (!res.ok) {
    throw res;
  }
  return await res.json();
};

const request = (endpoint: string, options: RequestInit) => {
  return fetch(`${apiUrl}/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const signin = (formData: ILoginForm) => {
  return request('login/', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
