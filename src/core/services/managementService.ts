import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;
// https://site.unite-gaming.com/backend/api/v1/management/activate_plan/ 
const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${apiUrl}/management/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const getTariff = () => {
  return request('get_subscribes/', { method: 'GET' });
};

export const activateTariff = ({ id, month }: { id: number, month: number }) => {
  return request('activate_plan/', {
    method: 'POST',
    body: JSON.stringify({
      subscribe_id: id,
      count_month: month,
    }),
  });
};

export const getRates = () => {
  return request('exchange_rates/', { method: 'GET' });
};
