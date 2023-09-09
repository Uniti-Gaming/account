import { Dispatch, SetStateAction, createContext } from 'react';
import { IUser } from '@interfaces/userInterface';

interface IVerifiedUserContext {
    currentUser: IUser;
    login: Dispatch<SetStateAction<IUser>>;
  }

export const VerifiedUserContext = createContext({} as IVerifiedUserContext);
