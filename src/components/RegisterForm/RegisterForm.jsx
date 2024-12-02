import css from './RegisterForm.module.css';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    if (!values.name || !values.email || !values.password) {
      toast('Field is empty', { icon: '❌' });
      return;
    }
    dispatch(
      register({
        name: values.name.trim(),
        email: values.email.trim(),
        password: values.password.trim(),
      })
    );

    actions.resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={css.form}>
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.registerButton}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
