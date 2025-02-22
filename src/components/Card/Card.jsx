import Subject from '../Subject';
import styles from './Card.module.css';

export const Card = ({ content }) => {
  return (
    <section className={styles.container_card}>
      <Subject
        key={content.id}
        name={content.category}
        video={content.video}
        description={content.description}
        colorBorder={content.colorBorder}
      />
    </section>
  );
}