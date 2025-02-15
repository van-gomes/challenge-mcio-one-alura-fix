import { Button } from '../Button/Button';
import styles from './Subject.module.css';

export const Subject = ({ name, video, description, colorButton }) => {
  const renderMedia = () => {
    if (video && video.includes('youtube.com/watch')) {
      const youtubeEmbedUrl = video.replace('watch?v=', 'embed/');
      return (
        <iframe
          width="560"
          height="315"
          src={youtubeEmbedUrl}
          title={`Vídeo da categoria ${name}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
      );
    }

    return <p className={styles.noMedia}>Nenhuma mídia disponível</p>;
  };

  return (
    <section className={styles.subject}>
      <div>
        <Button colorButton={colorButton}>{name}</Button>
      </div>
      <div>{renderMedia()}</div>
      <p>{description}</p>
    </section>
  );
};