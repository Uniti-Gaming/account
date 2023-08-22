import { createContext } from 'react';
import { IUser } from '@interfaces/userInterface';

export const VerifiedUserContext = createContext({} as IUser);
