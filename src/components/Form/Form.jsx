import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextField from "../TextField";
import styles from "./Form.module.css";

export const Form = ({ onRegister, subjects }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Salvando...", title, category, video, description);
    onRegister({
      title,
      category,
      video,
      description,
    });
  };

  const resetInputs = () => {
    setTitle("");
    setCategory("");
    setVideo("");
    setDescription("");
  };

  return (
    <section className={styles.form}>
      <form>
        <h1>NOVO VÍDEO</h1>
        <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h3>
        <h2>Criar Card</h2>

        <TextField
          value={title}
          aoAlterado={(valor) => setTitle(valor)}
          label="Titulo"
          type="text"
          placeholder="Ingrese el título"
          required
        />
        <DropdownList
          value={category}
          aoAlterado={(valor) => setCategory(valor)}
          label="Categoria"
          itens={subjects}
          placeholder="Selecione uma categoría"
          required
        />
        <TextField
          value={video}
          aoAlterado={(valor) => setVideo(valor)}
          label="Video"
          type="text"
          placeholder="Digite o link do video"
          required
        />
        <TextField
          value={description}
          aoAlterado={(valor) => setDescription(valor)}
          label="Descrição"
          type="text"
          placeholder="Sobre o que é esse vídeo?"
          required
        />
        <div className={styles.container__button}>
          <Button onClick={onSave}>GUARDAR</Button>
          <Button onClick={resetInputs}>LIMPAR</Button>
        </div>
      </form>
    </section>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
};
