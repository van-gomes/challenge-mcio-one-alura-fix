// import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.css';

export const NavLinks = () => {
  return (
    <nav className={styles.container_nav}>
      <ul className={styles.nav_links}>
        <li className={styles.nav_link_home}>
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