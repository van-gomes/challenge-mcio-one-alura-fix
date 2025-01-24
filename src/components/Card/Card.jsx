import styles from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ name }) => {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
    </section>
    );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};
