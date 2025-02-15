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
  const [showCategoryButton, setShowCategoryButton] = useState(false);

  const onSave = (event) => {
    event.preventDefault();

    const selectedSubject = subjects.find((subject) => subject.category === category);

    if (!selectedSubject) {
      console.error("Categoria não encontrada!");
      return;
    }

    setShowCategoryButton(true);

    onRegister({
      title,
      category,
      video,
      description,
      colorButton: selectedSubject.colorButton, // Passa a cor correta
    });
  };

  const resetInputs = () => {
    setTitle("");
    setCategory("");
    setVideo("");
    setDescription("");
    setShowCategoryButton(false);
  };

  const selectedSubject = subjects.find((subject) => subject.category === category);

  return (
    <section className={styles.form}>
      <form className={styles.form_container} onSubmit={onSave}>
        <h1>NOVO VÍDEO</h1>
        <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h3>
        <h2>Criar Card</h2>

        <div className={styles.container_form_group}>
          <div className={styles.form_group}>
            <TextField
              value={title}
              aoAlterado={(valor) => setTitle(valor)}
              label="Título"
              type="text"
              placeholder="Digite o título"
              required
            />
          </div>
          <div className={styles.form_group}>
            <DropdownList
              value={category}
              aoAlterado={(valor) => setCategory(valor)}
              label="Categoria"
              itens={subjects}
              placeholder="Selecione uma categoria"
              required
            />
          </div>
          <div className={styles.form_group}>
            <TextField
              value={video}
              aoAlterado={(valor) => setVideo(valor)}
              label="Vídeo"
              type="text"
              placeholder="Digite o link do vídeo"
              required
            />
          </div>
          <div className={styles.form_group}>
            <TextField
              value={description}
              aoAlterado={(valor) => setDescription(valor)}
              label="Descrição"
              type="text"
              placeholder="Sobre o que é esse vídeo?"
              required
            />
          </div>
        </div>

        <div className={styles.container_button}>
          <Button type="submit">GUARDAR</Button>
          <Button type="button" onClick={resetInputs}>LIMPAR</Button>
        </div>

        {showCategoryButton && category && selectedSubject && (
          <div className={styles.container_button}>
            <Button colorButton={selectedSubject.colorButton}>{category}</Button>
          </div>
        )}
      </form>
    </section>
  );
};

Form.propTypes = {
  onRegister: PropTypes.func.isRequired,
  subjects: PropTypes.array.isRequired,
};