import styles from "./Subject.module.css";
import iconEdit from "../../assets/icons/icon_edit.png";

export const Subject = ({ name, video, description, colorBorder, title }) => {
  const getYouTubeEmbedUrl = (url) => {
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = video ? getYouTubeEmbedUrl(video) : null;

  return (
    <div className={styles.container_subject}>
      <section
        className={styles.subject}
        style={{ "--borderColor": colorBorder || "#FFFFFF" }}
      >
        <div className={styles.container_video}>
          {youtubeEmbedUrl ? (
            <iframe
              src={youtubeEmbedUrl}
              title={`Vídeo da categoria ${name}`}
              className={styles.iframe_video}
            ></iframe>
          ) : (
            <p className={styles.noMedia}>Nenhuma mídia disponível</p>
          )}
        </div>
        <div className={styles.video_content}>
          <p className={styles.video_title}>{title}</p>
          <p className={styles.video_description}>{description}</p>
          <span className={styles.container_edit}>
            <img className={styles.edit} src={iconEdit} alt="Icone de editar" />
          </span>
        </div>
      </section>
    </div>
  );
};
