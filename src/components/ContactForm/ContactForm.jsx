import css from './ContactForm.module.css';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required!')
    .typeError('Enter phone-number!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name.trim(),
        number: values.number.trim(),
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <ErrorMessage name="name" component="p" style={{ color: 'red' }} />

        <Field
          className={css.field}
          type="text"
          name="number"
          placeholder="Your number"
        />
        <ErrorMessage name="number" component="p" style={{ color: 'red' }} />

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
