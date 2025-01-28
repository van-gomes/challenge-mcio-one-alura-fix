import styles from './Subject.module.css';
import PropTypes from 'prop-types';

export const Subject = ({ name, image, video, description }) => {
  return (
    <section className={styles.subject}>
      <h2 className={styles.title}>{name}</h2>
      <h2>{image}</h2>
      <h2>{video}</h2>
      <h2>{description}</h2>
    </section>
  );
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
