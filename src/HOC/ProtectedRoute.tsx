import { FC, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '@/core/contexts/AuthContext';

interface ProtectedRouteProps {
  element: React.ElementType;
  [key: string]: unknown;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element: Component, ...props }) => {
  const { currentUser } = useContext(AuthContext);
  return !currentUser ? (
    <Navigate to='/signin' replace />
  ) : (
    <Component verifiedUser={currentUser} {...props} />
  );
};

export default ProtectedRoute;