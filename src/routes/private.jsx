import { Navigate } from 'react-router-dom';
import { routePaths } from '../constants/paths';
import { useSelector } from 'react-redux';
import { ConnectMetaBatties } from '../pages/metaConnect';

export const PrivateRoute = ({ children }) => {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  if (!isSignedIn) {
    return <ConnectMetaBatties />;
  }

  return children;
};
