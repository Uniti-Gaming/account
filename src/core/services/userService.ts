import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const request = (endpoint: string, options: RequestInit) => {
  return fetch(`${apiUrl}/account/user/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const getBalance = () => {
  return request('user_balance/', { method: 'POST' });
};

export const getUser = () => {
  return request('user_data/', { method: 'POST' });
};

