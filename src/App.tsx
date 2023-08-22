import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Outlet, ScrollRestoration, useLoaderData } from 'react-router-dom';

import { AuthContext } from './core/contexts/AuthContext';
import { IUser } from '@interfaces/userInterface';

import Header from './components/Header/Header';


function App() {
  const user = useLoaderData() as IUser | null;
  const [currentUser, setCurrentUser] = useState<IUser | null>(user);

  const login: Dispatch<SetStateAction<IUser | null>> = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login,
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
