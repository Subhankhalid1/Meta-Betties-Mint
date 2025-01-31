import { Navigate } from 'react-router-dom';
import { routePaths } from '../constants/paths';

import { useSelector } from 'react-redux';
import { UserRoles } from '../enums/role';

export const AdminRoute = ({ children }) => {
  const roles = useSelector((state) => state.auth.user.roles);
  if (Array.isArray(roles) && !roles.includes(UserRoles.admin)) {
    return <Navigate to={'/'} />;
  }
  return children;
};
