import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <h1 className="visuallyHidden">register page</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
