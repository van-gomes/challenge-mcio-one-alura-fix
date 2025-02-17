import styles from './Subject.module.css';

export const Subject = ({ name, video, description, colorBorder }) => {
  const getYouTubeEmbedUrl = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = video ? getYouTubeEmbedUrl(video) : null;

  return (
    <div className={styles.subject_container}>
      <section
        className={styles.subject}
        style={{ "--borderColor": colorBorder || "#FFFFFF" }} // Passa a cor dinamicamente
      >
        <div>
          {youtubeEmbedUrl ? (
            <iframe
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
    </div>
  );
}