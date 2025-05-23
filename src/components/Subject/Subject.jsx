import styles from "./Subject.module.css";
import { MdEdit, MdDelete } from "react-icons/md";

export const Subject = ({
  name,
  colorBorder,
  colorIconEdit,
  description,
  title,
  video,
  onEdit,
  onDelete
}) => {
  const getYouTubeEmbedUrl = (url) => {
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const youtubeEmbedUrl = video ? getYouTubeEmbedUrl(video) : null;

  return (
    <div className={styles.container_subject}>
      <section className={styles.container_subject}>
        <div
          className={styles.container_video}
          style={{
            borderColor: colorBorder
          }}
        >
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
            <MdEdit
              style={{ color: colorIconEdit }}
              className={styles.md_icon}
              onClick={onEdit}
            />
            <MdDelete 
              style={{ color: colorIconEdit }}
              className={styles.md_icon}
              onClick={onDelete}
            />
          </span>
        </div>
      </section>
    </div>
  );
};
