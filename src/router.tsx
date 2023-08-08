import { createHashRouter } from 'react-router-dom';

import { appLoader } from './appLoader';

import App from './App';
import Account from './pages/Account/Account';
import Review from './pages/Account/Review/Review';

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
          { index: true, element: <Review/>},
        ],
      },
    ],
  },
]);

export default router;