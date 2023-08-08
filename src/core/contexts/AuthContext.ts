import { createContext, Dispatch, SetStateAction } from 'react';
import { IUser } from '../interfaces/userInterface';

interface IAuthContext {
  currentUser: IUser;
  login: Dispatch<SetStateAction<IUser>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
