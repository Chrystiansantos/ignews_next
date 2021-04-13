import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <ActiveLink activeClassName={styles.active} href="/">
          <img src="/images/logo.svg" alt="ig.news" />
        </ActiveLink>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={styles.active}>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
