import { Subject } from "../Subject/Subject";

export const Card = ({ content }) => {
  return (
    <section>
      <Subject
        name={content.category}
        title={content.title}
        video={content.video}
        description={content.description}
        colorBorder={content.colorBorder}
        colorIconEdit={content.colorIconEdit}
      />
    </section>
  );
};
