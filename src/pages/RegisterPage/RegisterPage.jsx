import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import s from './RegisterPage.module.css'
const RegisterPage = () => {
  return (
    <div className={s.registerContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <h1 className="visuallyHidden">register page</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
