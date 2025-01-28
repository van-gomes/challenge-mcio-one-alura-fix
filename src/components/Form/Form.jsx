import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextField from "../TextField";
import styles from "./Form.module.css";

export const Form = ({ onRegister, subjects }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Salvando...", title, category, image, video, description);
    onRegister({
      title,
      category,
      image,
      video,
      description,
    });
  };
  
  return (
    <section className={styles.form}>
      <form onSubmit={onSave}>
        <h1>NOVO VÍDEO</h1>
        <h3>Complete o formulário para criar um novo card de vídeo.</h3>
        <h2>Criar Card</h2>

        <TextField
          value={title}
          aoAlterado={valor => setTitle(valor)}
          label="Titulo"
          type="text"
          placeholder="Ingrese el título"
          required
        />
        <DropdownList
          value={category}
          aoAlterado={valor => setCategory(valor)}
          label="Categoria"
          itens={subjects}
          placeholder="Selecione uma categoría"
          required
        />
        <TextField
          value={image}
          aoAlterado={valor => setImage(valor)}
          label="Imagem"
          type="text"
          placeholder="Digite o link do imagem"
          required
        />
        <TextField
          value={video}
          aoAlterado={valor => setVideo(valor)}
          label="Video"
          type="text"
          placeholder="Digite o link do video"
          required
        />
        <TextField
          value={description}
          aoAlterado={valor => setDescription(valor)}
          label="Descrição"
          type="text"
          placeholder="Sobre o que é esse vídeo?"
          required
        />
        <Button>GUARDAR</Button>
        <Button>LIMPAR</Button>
      </form>
    </section>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
};