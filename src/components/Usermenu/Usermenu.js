import { useDispatch } from 'react-redux';
// hooks:
import { useAuth } from 'hooks';
// operation:
import { logOut } from 'redux/auth/operations';
// styles:
import css from './Usermenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span className={css.user}>
      what's up,
      <span className={css.userName}> {user.name}</span>
      <button onClick={() => dispatch(logOut())}>click to LOGOUT</button>
    </span>
  );
}
