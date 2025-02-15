import Subject from '../Subject';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ content, colorBorder }) => {
  return (
    <section className={styles.card} style={{ borderColor: colorBorder }}>
      <Subject
        key={content.id}
        name={content.category}
        image={content.image}
        video={content.video}
        description={content.description}
        colorButton={content.colorButton}
      />
    </section>
  );
};

Card.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    colorButton: PropTypes.string.isRequired
  }).isRequired,
  colorBorder: PropTypes.string.isRequired,
};