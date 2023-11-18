import { useDispatch } from 'react-redux';
import { register } from '../../../src/redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(register(values))
          .unwrap()
          .then(() =>
            Notify.success(
              `Congratulations and welcome! You have registered successfully`
            )
          )
          .catch(error => Notify.failure(`Error: ${error.message}`));

        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
