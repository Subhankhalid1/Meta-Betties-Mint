import { Redirect } from 'react-router-dom';
import { UserRoles } from '../enums/role';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'; 
import React from 'react';

const withUserAccess = (Component) => {
  return (props) => {
    const user = useSelector((state) => state.auth.user); 

    if (user && user.role.toLowerCase() !== UserRoles.user) {
      toast.error('You are not authorized to view this page.', {
        toastId: 'Unauthorized',
      });
      return <Redirect to="/admin" />;
    }

    return <Component {...props} />;
  };
};

export default withUserAccess;