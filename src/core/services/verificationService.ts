import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;

const request = (endpoint: string, options?: RequestInit) => {
  return fetch(`${apiUrl}/account/verification/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const checkVerification = () => {
  return request('check_verification/', { method: 'POST' });
};
export const checkCode = (type: 'number' | 'email', value: string) => {
  return request(`${type}/check_code/`, {
    method: 'POST',
    body: JSON.stringify({ code: value }),
  });
};
export const sendEmailVerification = () => {
  return request('email/send_email/', { method: 'POST' });
};
export const sendNumberVerification = () => {
  return request('number/send_sms/', { method: 'POST' });
};
export const resendEmailVerification = () => {
  return request('email/resend_email/', { method: 'POST' });
};
export const resendNumberVerification = () => {
  return request('number/resend_sms/', { method: 'POST' });
};
