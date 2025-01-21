import { useState } from "react";
import Button from "../Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextField from "../TextField";
import styles from "./Form.module.css";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const categories = [
    { id: 1, name: "Front-end" },
    { id: 2, name: "Back-end" },
    { id: 3, name: "Mobile" },
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log({
      title,
      category,
      image,
      video,
      description,
    });
  };

  return (
    <section className={styles.form}>
      <form onSubmit={aoSalvar}>
        <h1>NOVO VÍDEO</h1>
        <h3>Complete o formulário para criar um novo card de vídeo.</h3>
        <h2>Criar Card</h2>

        <TextField
          value={title}
          handleInputChange={(value) => setTitle(value)}
          label="Titulo"
          type="text"
          placeholder="Ingrese el título"
          required
        />
        <DropdownList
          value={category}
          handleInputChange={(value) => setCategory(value)}
          label="Categoria"
          itens={categories}
          placeholder="Selecione uma categoría"
        />
        <TextField
          value={image}
          handleInputChange={(value) => setImage(value)}
          label="Imagem"
          type="text"
          placeholder="Digite o link do imagem"
          required
        />
        <TextField
          value={video}
          handleInputChange={(value) => setVideo(value)}
          label="Video"
          type="text"
          placeholder="Digite o link do video"
          required
        />
        <TextField
          value={description}
          handleInputChange={(value) => setDescription(value)}
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
