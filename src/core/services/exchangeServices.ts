import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${apiUrl}/account/user/exchange/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};


export const exchange = ({value, endpoint}: {value: number, endpoint: string}) => {
  return request(`${endpoint}/`, {
    method: 'POST',
    body: JSON.stringify({ main: value }),
  });
};
