import { useDispatch } from 'react-redux';
import { logOut } from '../../../src/redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../src/redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
