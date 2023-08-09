import { createHashRouter } from 'react-router-dom';

import { appLoader } from './appLoader';

import App from './App';
import Account from './pages/Account/Account';
import Review from './pages/Account/Review/Review';
import Information from './pages/Account/Information/Information';
import Signin from './pages/Auth/Signin/Signin';

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
          { path: 'information', element: <Information />},
        ],
      },
      {
        path: 'signin',
        element: <Signin />,
      },
    ],
  },
]);

export default router;