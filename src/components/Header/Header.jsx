import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { NavLinks } from '../NavLinks/NavLinks';

export const Header = () => {
    return (
      <header className={styles.container__header}>
        <div className={styles.container_logo}>
          <img src={logo} alt="Logo Alura Fix"/>
        </div>
        <NavLinks />
      </header>
    );
  };