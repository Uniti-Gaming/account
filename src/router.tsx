import { createHashRouter } from 'react-router-dom';

import { appLoader } from './appLoader';

import App from './App';
import Account from './pages/Account/Account';
import Review from './pages/Account/Review/Review';
import Information from './pages/Account/Information/Information';
import Signin from './pages/Auth/Signin/Signin';
import Tariff from './pages/Account/Tariff/Tariff';
import SignUp from './pages/Auth/Signup/Signup';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    children: [
      {
        path: '',
        element: <Account />,
        children: [
          { index: true, element: <Review />},
          { path: '/information', element: <Information />},
          { path: '/tariff', element: <Tariff />},
        ],
      },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
]);

export default router;