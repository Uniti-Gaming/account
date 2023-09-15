import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${apiUrl}/management/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const getTariff = () => {
  return request('get_subscribes/', { method: 'GET' });
};