import { useDispatch } from 'react-redux';
import { register } from '../../../src/redux/auth/operations';
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
} from './RegisterForm.styled.js';

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
        <Container>
          <h2>Register</h2>
          <Label htmlFor="name">
            Username
            <Input type="text" id="name" name="name" />
            <ErrorMsg component="div" name="name" />
          </Label>

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

          <Button type="submit">Register</Button>
          <AddTextContainer>
            <p>Have an account?</p>
            <Link to="/login">Log In</Link>
          </AddTextContainer>
        </Container>
      </Form>
    </Formik>
  );
};
