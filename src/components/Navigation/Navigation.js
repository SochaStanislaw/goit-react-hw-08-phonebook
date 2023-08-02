import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// components:
import { Loader } from 'components/Loader/loader';
// hooks:
import { useAuth } from 'hooks';
// styles:
import styled from 'styled-components';
import css from './Navigation.module.css';

const UserMenu = lazy(() => import('../Usermenu/Usermenu'));

export default function Navigation() {
  const ActiveLink = styled(NavLink)`
    &.active {
      color: white;
      font-weight: bolder;
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <p className={css.title}>Your best contact's list!</p>
        <nav>
          <ActiveLink className={css.navLink} to="/" end>
            Home
          </ActiveLink>
          {isLoggedIn ? (
            <>
              <ActiveLink className={css.navLink} to="/contacts" end>
                Your contacts
              </ActiveLink>
              <UserMenu />
            </>
          ) : (
            <>
              <ActiveLink className={css.navLink} to="/register" end>
                Register
              </ActiveLink>
              <ActiveLink className={css.navLink} to="/login" end>
                Login
              </ActiveLink>
            </>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
