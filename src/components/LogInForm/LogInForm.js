import { useDispatch } from 'react-redux';
import { logIn } from '../../../src/redux/auth/operations';
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        dispatch(logIn(values))
          .unwrap()
          .then(() => Notify.success(`You have logged in successfully`))
          .catch(error => Notify.failure(`Error: ${error.message}`));

        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
