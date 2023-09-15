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
export const getCurrentTariff = () => {
  return request('get_user_subscribe/', { method: 'GET' });
};
export const getUserKeys = () => {
  return request('get_user_keys/', { method: 'POST' });
};
export const getUser = () => {
  return request('user_data/', { method: 'POST' });
};
export const getUserInfo = () => {
  return request('get_user_info/', { method: 'GET' });
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
export const editLang = (data: {[key: string]: string }) => {
  return request('edit/prefer_lang/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const editPrivateInformation = (data: {[key: string]: string }) => {
  return request('edit/private_information/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
export const editAdditionalInformation = (data: {[key: string]: string }) => {
  return request('edit/additional_information/', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const editEmail = (value: string) => {
  return request('edit/email/', {
    method: 'POST',
    body: JSON.stringify({ email: value }),
  });
};
export const editNumber = (value: string) => {
  return request('edit/number/', {
    method: 'POST',
    body: JSON.stringify({ number: value }),
  });
};

