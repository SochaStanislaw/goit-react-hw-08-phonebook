import { useDispatch } from 'react-redux';
// operation:
import { logIn } from 'redux/auth/operations';
// styles:
import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div>
      <p className={css.wrap}>
        have u already tried the best contact's list in the world?<br></br>
        GREAT! LOG IN below!
      </p>
      <form className={css.wrap} onSubmit={handleSubmit}>
        <label>type your email:</label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="youremail@bestphonebook.com"
          required
        ></input>
        <label>enter password:</label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="type password"
          required
        ></input>
        <button type="submit">login in!</button>
      </form>
    </div>
  );
}
