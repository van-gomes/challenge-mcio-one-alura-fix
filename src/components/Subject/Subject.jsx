import { Button } from '../Button/Button';
import styles from './Subject.module.css';
import PropTypes from 'prop-types';

export const Subject = ({ name, video, description, colorButton }) => {
  const renderMedia = () => {
    // Renderiza vídeo do YouTube se for uma URL válida
    if (video && video.includes('youtube.com/watch')) {
      const youtubeEmbedUrl = video.replace('watch?v=', 'embed/');
      return (
        <iframe
          src={youtubeEmbedUrl}
          title={`Vídeo da categoria ${name}`}
          className={styles.video}
        ></iframe>
      );
    }

    return <p className={styles.noMedia}>Nenhuma mídia disponível</p>;
  };

  return (
    <div className={styles.subject}>
      <div className={styles.button}>
        <Button colorButton={colorButton} className={styles.button__subject}>{name}</Button>
      </div>
      <div className={styles.media}>{renderMedia()}</div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
