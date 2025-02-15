import Subject from '../Subject';
import styles from './Card.module.css';

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