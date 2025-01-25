import styles from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ name, colorButton, colorBorder }) => {
  return (
    <section className={styles.card} style={{ backgroundColor: colorButton, borderColor: colorBorder }}>
      <h3>{name}</h3>
    </section>
    );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  colorBorder: PropTypes.string.isRequired
};
