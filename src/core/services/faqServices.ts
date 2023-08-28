import { getResponseData } from '../utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_FAQ_URL;

export const getFaq = () => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(getResponseData);
};