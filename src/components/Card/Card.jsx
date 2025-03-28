import { Subject } from "../Subject/Subject";

export const Card = ({ content, colorBorder }) => {
  return (
    <section style={{ boderColor: colorBorder}}>
      <Subject
        name={content.category}
        colorBorder={content.colorBorder}
        colorIconEdit={content.colorIconEdit}
        title={content.title}
        video={content.video}
        description={content.description}
      />
    </section>
  );
};
