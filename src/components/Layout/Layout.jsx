import s from './Layout.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

//components
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';

//redux
import { selectorIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const Layout = ({ children }) => {
  const isLogged = useSelector(selectorIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const setActive = ({ isActive }) =>
    isActive ? s.activeLink : s.noActiveLink;

  return (
    <div className="container">
      <header className={s.header}>
        <nav className={s.navigation}>
          <NavLink className={setActive} to="/">
            Home
          </NavLink>
          {isLogged && (
            <NavLink className={setActive} to="/contacts">
              Contacts
            </NavLink>
          )}
        </nav>
        {isLogged ? (
          <div className={s.user_block}>
            <p className={s.username}>Welcome, {user.name}</p>
            <button
              type="button"
              className={s.logoutButton}
              onClick={() => dispatch(logOut())}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={s.authNavContainer}>
            <NavLink className={setActive} to="/register">
              Register
            </NavLink>
            <NavLink className={setActive} to="/login">
              Sign In
            </NavLink>
          </div>
        )}
      </header>
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
