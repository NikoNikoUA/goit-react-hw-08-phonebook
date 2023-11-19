import { useDispatch } from 'react-redux';
import { logOut } from '../../../src/redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../src/redux/auth/selectors';
import { Container, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
