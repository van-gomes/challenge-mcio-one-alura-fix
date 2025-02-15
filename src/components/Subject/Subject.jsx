import styles from './Subject.module.css';

export const Subject = ({ name, video, description }) => {
  const getYouTubeEmbedUrl = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = video ? getYouTubeEmbedUrl(video) : null;

  return (
    <section className={styles.subject}>
      <div>
        {youtubeEmbedUrl ? (
          <iframe
            width="560"
            height="315"
            src={youtubeEmbedUrl}
            title={`Vídeo da categoria ${name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        ) : (
          <p className={styles.noMedia}>Nenhuma mídia disponível</p>
        )}
      </div>
      <p>{description}</p>
    </section>
  );
};