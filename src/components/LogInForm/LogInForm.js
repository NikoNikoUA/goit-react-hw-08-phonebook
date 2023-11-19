import { useDispatch } from 'react-redux';
import { logIn } from '../../../src/redux/auth/operations';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Link } from 'react-router-dom';
import {
  Container,
  ErrorMsg,
  Label,
  Input,
  Button,
  AddTextContainer,
} from './LogInForm.styled';

Notify.init({
  borderRadius: '11px',
  position: 'top-right',
  width: '400px',
  timeout: 1000,
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
        <Container>
          <h2>Log In</h2>
          <Label htmlFor="email">
            Email
            <Input type="email" id="email" name="email" />
            <ErrorMsg component="div" name="email" />
          </Label>

          <Label htmlFor="password">
            Password
            <Input type="password" id="password" name="password" />
            <ErrorMsg component="div" name="password" />
          </Label>

          <Button type="submit">Log In</Button>
          <AddTextContainer>
            <p>Do not have an account?</p>
            <Link to="/register">Register</Link>
          </AddTextContainer>
        </Container>
      </Form>
    </Formik>
  );
};
