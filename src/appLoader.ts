import { getUser } from './core/services/userService';

const prod = import.meta.env.PROD;

export const appLoader = async () => {
  if (prod) {
    try {
      const user = await getUser();
      return user;
    } catch {
      return null;
    }
  } else {
    return {
      name: 'Muhammetali',
      number: '+993 (65) 81-25-14',
      user_id: 'UG-45-qwer',
      email: 'bababum1995@gmail.com',
      user_ref: 'XXXX-XXXX-XXXX',
    };
  }
};