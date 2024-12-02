import css from './AuthNav.module.css';

import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  const setActive = ({ isActive }) =>
    isActive ? css.activeLink : css.noActiveLink;

  return (
    <div className={css.authNavContainer}>
      <NavLink className={setActive} to="/register">
        Register
      </NavLink>
      <NavLink className={setActive} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
