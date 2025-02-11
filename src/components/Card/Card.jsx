import Subject from "../Subject";
import styles from "./Card.module.css";
import PropTypes from "prop-types";

export const Card = ({ content, colorBorder, colorButton }) => {
  return (
    <section
      className={styles.card}
      style={{ borderColor: colorBorder, colorButton: colorButton }}
    >
      <Subject
        key={content.id}
        name={content.category}
        video={content.video}
        description={content.description}
        colorButton={content.colorButton}
        colorBorder={content.colorBorder}
      />
    </section>
  );
};

Card.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    colorButton: PropTypes.string.isRequired,
    colorBorder: PropTypes.string.isRequired,
  }).isRequired,
  colorButton: PropTypes.string.isRequired,
  colorBorder: PropTypes.string.isRequired,
};
