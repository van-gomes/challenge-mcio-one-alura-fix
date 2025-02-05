import { Button } from '../Button/Button';
import styles from './Subject.module.css';
import PropTypes from 'prop-types';

export const Subject = ({ name, image, video, description, colorButton }) => {
  const renderMedia = () => {
    // Renderiza imagem se for uma URL válida
    if (image && (image.endsWith('.jpg') || image.endsWith('.jpeg') || image.endsWith('.png') || image.endsWith('.gif'))) {
      return <img src={image} alt={`Imagem da categoria ${name}`} className={styles.image} />;
    }

    // Renderiza vídeo do YouTube se for uma URL válida
    if (video && video.includes('youtube.com/watch')) {
      const youtubeEmbedUrl = video.replace('watch?v=', 'embed/');
      return (
        <iframe
          width="560"
          height="315"
          src={youtubeEmbedUrl}
          title={`Vídeo da categoria ${name}`}
          frameBorder="0"
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
      <div className={styles.header}>
        <Button colorButton={colorButton}>{name}</Button>
      </div>
      <div className={styles.media}>{renderMedia()}</div>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
