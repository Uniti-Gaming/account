import { defaultUser } from './assets/data/fakeData';
import { getUser } from './core/services/userService';

const prod = import.meta.env.PROD;

export const appLoader = async () => {
  if (prod) {
    try {
      return await getUser();
    } catch {
      return null;
    }
  } else {
    return defaultUser;
  }
};