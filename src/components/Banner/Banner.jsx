import banner from '../../assets/bannerMain.png';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.container__banner}>
        <img src={banner} alt="Banner" />
    </section> 
  );
};
