import { Button } from '../Button/Button';
import styles from './Subject.module.css';
import PropTypes from 'prop-types';

export const Subject = ({ name, image, video, description, colorButton }) => {
  return (
    <section className={styles.subject}>
      <div>
      <Button colorButton={colorButton}>{name}</Button>
      </div>
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
  colorButton: PropTypes.string.isRequired
};
