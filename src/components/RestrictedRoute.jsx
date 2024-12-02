import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
