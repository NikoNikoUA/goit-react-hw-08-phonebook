import { Link, AuthContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthContainer>
  );
};
