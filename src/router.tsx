import { createHashRouter } from 'react-router-dom';

import { appLoader } from './appLoader';

import App from './App';
import Account from './pages/Account/Account';
import Review from './pages/Account/Review/Review';
import Information from './pages/Account/Information/Information';
import Tariff from './pages/Account/Tariff/Tariff';
import Signin from './pages/Auth/Signin/Signin';
import SignUp from './pages/Auth/Signup/Signup';
import Confirm from './pages/Auth/Confirm/Confirm';
import NewPassword from './pages/Auth/NewPassword/NewPassword';
import Success from './pages/Auth/Success/Success';

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
      { path: '/new-password', element: <NewPassword /> },
      { path: '/confirm-email', element: <Confirm type='email' /> },
      { path: '/confirm-phone', element: <Confirm type='phone' /> },
      { path: '/success-phone', element: <Success type='phone' /> },
      { path: '/success-email', element: <Success type='email' /> },
      { path: '/success-password', element: <Success type='password' /> },
    ],
  },
]);

export default router;