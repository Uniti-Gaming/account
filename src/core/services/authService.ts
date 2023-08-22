import { ISigninForm, ISignupForm } from '@interfaces/authInterface';
import { baseOptions, getResponseData } from '@utils/apiUtils';

const apiUrl = import.meta.env.VITE_API_URL;


const request = (endpoint: string, options: RequestInit) => {
  return fetch(`${apiUrl}/auth/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
};

export const signin = (formData: ISigninForm) => {
  return request('login/', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const signup = (formData: ISignupForm) => {
  return request('registration/', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

