import { createBrowserRouter } from 'react-router-dom';

import { appLoader } from './appLoader';
import { loader as reviewLoader } from './pages/Account/Review/loader';
import { loader as balanceLoader } from './pages/Account/Balance/loader';
import { loader as tariffLoader } from './pages/Account/Tariff/loader';
import { loader as suportLoader } from './pages/Account/Support/loader';
import { loader as historyLoader } from './pages/Account/History/loader';
import { emailLoader, phoneLoader } from './pages/Auth/Confirm/loader';

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
import Balance from './pages/Account/Balance/Balance';
import History from './pages/Account/History/History';
import Support from './pages/Account/Support/Support';
import UseCode from './pages/UseCode/UseCode';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter([
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
          { path: '/information', element: <Information /> },
          {
            path: '/balance',
            element: <Balance />,
            loader: balanceLoader,
          },
          {
            path: '/tariff',
            element: <Tariff />,
            loader: tariffLoader,
          },
          {
            path: '/history',
            element: <History />,
            loader: historyLoader,
          },
          {
            path: '/support',
            element: <Support />,
            loader: suportLoader,
          },
        ],
      },
      { path: '/signin', element: <Signin /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/forgot', element: <Reset /> },
      { path: '/new-password', element: <NewPassword /> },
      {
        path: '/confirm-email',
        element: <ProtectedRoute element={Confirm} type='email'/>,
        loader: emailLoader,
      },
      {
        path: '/confirm-phone',
        element: <ProtectedRoute element={Confirm} type='number'/>,
        loader: phoneLoader,
      },
      { path: '/success-number', element: <Success type='phone' /> },
      { path: '/success-email', element: <Success type='email' /> },
      { path: '/success-password', element: <Success type='password' /> },
      {
        path: '/use-code',
        element: <ProtectedRoute element={UseCode} type='email'/>,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;