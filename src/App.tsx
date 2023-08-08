import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import { AuthContext } from './core/contexts/AuthContext';
import { IUser } from '@interfaces/userInterface';

import Header from './components/Header/Header';


function App() {
  const user = useLoaderData() as IUser;
  const [currentUser, setCurrentUser] = useState<IUser>(user);

  const login: Dispatch<SetStateAction<IUser>> = useCallback((user) => {
    setCurrentUser(user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login,
  }), [currentUser, login]);


  return (
    <AuthContext.Provider value={contextValue}>
      <Header />
      <Outlet />
    </AuthContext.Provider>
  );
}

export default App;
