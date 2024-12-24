import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css'
const LoginPage = () => {
  return (
    <div className={s.loginContainer}>
      <DocumentTitle>Login</DocumentTitle>
      <h1 className="visuallyHidden">login page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
