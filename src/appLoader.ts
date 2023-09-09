import { defaultUser } from './assets/data/fakeData';
import { getUser, getUserInfo } from './core/services/userService';

const prod = import.meta.env.PROD;

export const appLoader = async () => {
  if (prod) {
    try {
      const [user, userInfo] = await Promise.all([getUser(), getUserInfo()]);
      return { ...user, ...userInfo };
    } catch {
      return null;
    }
  } else {
    return defaultUser;
  }
};