import styles from "./Subject.module.css";
import PropTypes from "prop-types";

export const Subject = ({ name, video }) => {
  const renderMedia = () => {
    if (video && video.includes("youtube.com/watch")) {
      const youtubeEmbedUrl = video.replace("watch?v=", "embed/");
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
      <div>
        <a className={styles.media}>{renderMedia()}</a>
        {/* <p className={styles.description}>{description}</p> */}
      </div>
    </div>
  );
};

Subject.propTypes = {
  name: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colorButton: PropTypes.string.isRequired,
};
