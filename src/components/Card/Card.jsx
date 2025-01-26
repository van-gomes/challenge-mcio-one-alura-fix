import styles from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ name, colorButton, colorBorder }) => {
  return (
    <section className={styles.card} style={{ backgroundColor: colorButton, borderColor: colorBorder }}>
      <h2 className={styles.title}>{name}</h2>
      <div>
        <img src='https://github.com/van-gomes.png' />
      </div>
      <div>
        <button className={styles.button}>DELETAR</button>
        <button className={styles.button}>EDITAR</button>
      </div>
    </section>
    );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
  colorBorder: PropTypes.string.isRequired
};
