// import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';

export const NavLinks = () => {
  return (
    <nav>
      <ul className={styles.nav__links}>
        <li>
          <a href="/">
            HOME
          </a>
        </li>
        <li>
          <a href="/videos">
            NOVO VÍDEO
          </a>
        </li>
      </ul>
    </nav>
  );
};