import styles from "./Subject.module.css";
import { FaEdit } from "react-icons/fa";

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

          <div className={styles.container_edit_icon}>
          <span
            className={styles.edit_span}
            onClick={() => console.log("Editar vídeo")}
          >
            <FaEdit />
          </span>
          </div>
        </div>
      </section>
    </div>
  );
};
