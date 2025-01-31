import { Redirect } from 'react-router-dom';
import { useAppSelector } from '@/hooks/use-store';

const withAuth = (Component) => {
  return (props) => {
    const user = useAppSelector((state) => state.auth.user);

    if (!user) {
      return <Redirect to="/signin" />;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
