import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.wrap}>
      {isLoggedIn ? (
        <p>
          Yo!
          <span className={css.span}> {user.name} </span>
          if u want see yours homie's phone number, just{' '}
          <Link className={css.span} to="/contacts">
            CLICK!
          </Link>
        </p>
      ) : (
        <p>
          What's up!<br></br>Wanna have cool, decent, minimalist and totally
          useless phonebook?<br></br>
          You're in da right place!<br></br>
          Only thing what u have to do is give me your personal data!<br></br>
          (kiddng, just register{' '}
          <Link to="/register">
            <span className={css.span}>HERE)</span>
          </Link>
          or if u already have profile, just
          <Link to="/login">
            <span className={css.span}>LOGIN!</span>
          </Link>{' '}
        </p>
      )}
    </div>
  );
}
