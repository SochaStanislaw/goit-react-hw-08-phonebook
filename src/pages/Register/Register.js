import { useDispatch } from 'react-redux';
// operation:
import { register } from 'redux/auth/operations';
// styles:
import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <p className={css.wrap}>
        Type your data to access to you own exclusive, premium, private
        phonebook (FOR FREE!!!)
      </p>
      <form onSubmit={handleSubmit} className={css.wrap}>
        <label>name:</label>
        <input
          className={css.input}
          type="text"
          name="name"
          required
          placeholder="what's your name?"
        />
        <label>type your email:</label>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="igonnahavethebest@phonebook.com"
          required
        />
        <label>think up your password (remeber! type minimum 8 symbols!)</label>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="the best password: admin1234"
          required
        />
        <button style={{ padding: '5px 10px' }} type="submit">
          {' '}
          SING UP!!!
        </button>
      </form>
    </div>
  );
}
