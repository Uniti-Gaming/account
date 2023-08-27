import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${apiUrl}/account/user/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const getBalance = () => {
  return request('user_balance/', { method: 'POST' });
};
export const getTransactions = () => {
  return request('get_transactions/', { method: 'POST' });
};
export const getTariff = () => {
  return request('user_subscribes/', { method: 'GET' });
};
export const getUser = () => {
  return request('user_data/', { method: 'POST' });
};
export const logout = () => {
  return request('logout/', { method: 'POST' });
};
export const applyPromocode = (value: string) => {
  return request('use_promocode/', {
    method: 'POST',
    body: JSON.stringify({ promocode: value }),
  });
};

