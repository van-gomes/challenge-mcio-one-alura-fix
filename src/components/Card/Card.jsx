import Subject from '../Subject';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

export const Card = ({ content, colorButton, colorBorder  }) => {
  return (
    <section className={styles.card} style={{ backgroundColor: colorButton, borderColor: colorBorder }}>
      <Subject
        key={content.id}
        name={content.title}
        image={content.image}
        video={content.video}
        description={content.description}
      />
    </section>
  );
};

Card.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  colorButton: PropTypes.string.isRequired,
  colorBorder: PropTypes.string.isRequired,
};