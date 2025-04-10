import { Subject } from "../Subject/Subject";

export const Card = ({ content, onEditClick }) => {
  return (
    <section>
      <Subject
        name={content.category}
        title={content.title}
        video={content.video}
        description={content.description}
        colorBorder={content.colorBorder}
        colorIconEdit={content.colorIconEdit}
        onEdit={() => onEditClick(content)} 
      />
    </section>
  );
};
