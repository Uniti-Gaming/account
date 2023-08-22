import { createContext, Dispatch, SetStateAction } from 'react';
import { IUser } from '../interfaces/userInterface';

interface IAuthContext {
  currentUser: IUser | null;
  login: Dispatch<SetStateAction<IUser | null>>;
}

export const AuthContext = createContext({} as IAuthContext);
