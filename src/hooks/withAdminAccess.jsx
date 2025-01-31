import { UserRoles } from '../enums/role';
import { toast } from 'react-toastify';
import { useAppSelector } from '@/hooks/use-store';
import { useHistory } from 'react-router-dom';

const withAdminAccess = (Component) => {
  return (props) => {
    const history = useHistory();
    const user = useAppSelector((state) => state.auth.user);

    if (user && user.role.toLowerCase() !== UserRoles.admin) {
      toast.error('You are not authorized to view this page.', {
        toastId: 'Unauthorized',
      });
      history.push('/');
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAdminAccess;
