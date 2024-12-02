import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <h1 className="visuallyHidden">login page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
