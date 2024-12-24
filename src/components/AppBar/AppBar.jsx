import css from './AppBar.module.css';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {
  const isLogged = useSelector(selectorIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav/>}
    </header>
  );
};

export default AppBar;
