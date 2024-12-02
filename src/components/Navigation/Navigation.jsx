import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const setActive = ({ isActive }) =>
    isActive ? css.activeLink : css.noActiveLink;

  return (
    <nav className={css.navigation}>
      <NavLink className={setActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={setActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
