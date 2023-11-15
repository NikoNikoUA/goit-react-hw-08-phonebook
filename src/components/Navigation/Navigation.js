import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../src/redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <nav>{isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}</nav>;
};
