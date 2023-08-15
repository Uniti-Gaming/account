import { ISigninForm, ISignupForm } from '../interfaces/authInterface';

const apiUrl = import.meta.env.VITE_API_URL_AUTH;
const apiKey = import.meta.env.VITE_API_KEY;

const baseOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'XAPIKEY': apiKey,
  },
  credentials: 'include',
};

const getResponseData = async (res: Response) => {
  if (!res.ok) {
    if(res.status === 400){
      return await res.json();
    }
    return Promise.reject(res);
  }
  return await res.json();
};

const request = (endpoint: string, options: RequestInit) => {
  return fetch(`${apiUrl}/${endpoint}`, { ...baseOptions, ...options }).then(getResponseData);
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