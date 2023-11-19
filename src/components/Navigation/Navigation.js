import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../src/redux/auth/selectors';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <nav>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</nav>;
};
