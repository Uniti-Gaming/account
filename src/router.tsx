import { createHashRouter } from 'react-router-dom';

import { appLoader } from './appLoader';
import { loader as reviewLoader } from './pages/Account/Review/loader';
import { emailLoader } from './pages/Auth/Confirm/loader';

import App from './App';
import ProtectedRoute from './HOC/ProtectedRoute';
import Account from './pages/Account/Account';
import Review from './pages/Account/Review/Review';
import Information from './pages/Account/Information/Information';
import Tariff from './pages/Account/Tariff/Tariff';
import Signin from './pages/Auth/Signin/Signin';
import SignUp from './pages/Auth/Signup/Signup';
import Confirm from './pages/Auth/Confirm/Confirm';
import NewPassword from './pages/Auth/NewPassword/NewPassword';
import Success from './pages/Auth/Success/Success';
import Reset from './pages/Auth/Reset/Reset';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    loader: appLoader,
    children: [
      {
        path: '',
        element:  <ProtectedRoute element={Account} />,
        children: [
          {
            index: true,
            element: <Review />,
            loader: reviewLoader,
          },
          { path: '/information', element: <Information />},
          { path: '/tariff', element: <Tariff />},
        ],
      },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/reset', element: <Reset /> },
      { path: '/new-password', element: <NewPassword /> },
      {
        path: '/confirm-email',
        element: <ProtectedRoute element={Confirm} type='email'/>,
        loader: emailLoader,
      },
      {
        path: '/confirm-phone',
        element: <ProtectedRoute element={Confirm} type='number'/>,
      },
      { path: '/success-phone', element: <Success type='phone' /> },
      { path: '/success-email', element: <Success type='email' /> },
      { path: '/success-password', element: <Success type='password' /> },
    ],
  },
]);

export default router;