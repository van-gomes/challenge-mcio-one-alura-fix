import { useState, useEffect } from "react";
import Button from "../Button";
import { DropdownList } from "../DropdownList/DropdownList";
import TextField from "../TextField";
import styles from "./Form.module.css";

export const Form = ({ onRegister, subjects, editingData, onEdit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const selectedSubject = subjects.find((subject) => subject.category === category);

  useEffect(() => {
    if (editingData) {
      setTitle(editingData.title);
      setCategory(editingData.category);
      setVideo(editingData.video);
      setDescription(editingData.description);
    } else {
      resetInputs();
    }
  }, [editingData]);

  const onSave = (event) => {
    event.preventDefault();

    if (!selectedSubject) {
      console.error("Categoria não encontrada!");
      return;
    }

    const formData = {
      title,
      category,
      video,
      description,
      colorButton: selectedSubject.colorButton,
    };

    if (editingData) {
      onEdit({ ...formData, id: editingData.id }); // ou outra propriedade identificadora
    } else {
      onRegister(formData);
    }

    resetInputs();
  };

  const resetInputs = () => {
    setTitle("");
    setCategory("");
    setVideo("");
    setDescription("");
  };

  return (
    <section className={styles.form}>
      <form className={styles.container_form} onSubmit={onSave}>
        <h1>{editingData ? "EDITAR VÍDEO" : "NOVO VÍDEO"}</h1>
        <h3>{editingData ? "ALTERE OS DADOS DO VÍDEO" : "COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO."}</h3>
        <h2>{editingData ? "Editar Card" : "Criar Card"}</h2>

        <div className={styles.container_form_group}>
          <div className={styles.form_group}>
            <TextField
              value={title}
              aoAlterado={setTitle}
              label="Título"
              type="text"
              placeholder="Digite o título"
              required
            />
          </div>
          <div className={styles.form_group}>
            <DropdownList
              value={category}
              aoAlterado={setCategory}
              label="Categoria"
              itens={subjects}
              placeholder="Selecione uma categoria"
              required
            />
          </div>
          <div className={styles.form_group}>
            <TextField
              value={video}
              aoAlterado={setVideo}
              label="Vídeo"
              type="text"
              placeholder="Digite o link do vídeo"
              required
            />
          </div>
          <div className={styles.form_group}>
            <TextField
              value={description}
              aoAlterado={setDescription}
              label="Descrição"
              type="text"
              placeholder="Sobre o que é esse vídeo?"
              required
            />
          </div>
        </div>

        <div className={styles.container_button}>
          <Button type="submit">{editingData ? "ATUALIZAR" : "GUARDAR"}</Button>
          <Button type="button" onClick={resetInputs}>LIMPAR</Button>
        </div>
      </form>
    </section>
  );
};

// import { useState } from "react";
// import Button from "../Button";
// import { DropdownList } from "../DropdownList/DropdownList";
// import TextField from "../TextField";
// import styles from "./Form.module.css";

// export const Form = ({ onRegister, subjects }) => {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [video, setVideo] = useState("");
//   const [description, setDescription] = useState("");

//   const selectedSubject = subjects.find((subject) => subject.category === category);

//   const onSave = (event) => {
//     event.preventDefault();

//     if (!selectedSubject) {
//       console.error("Categoria não encontrada!");
//       return;
//     }

//     onRegister({
//       title,
//       category,
//       video,
//       description,
//       colorButton: selectedSubject.colorButton,
//     });
//   };

//   const resetInputs = () => {
//     setTitle("");
//     setCategory("");
//     setVideo("");
//     setDescription("");
//   };

//   return (
//     <section className={styles.form}>
//       <form className={styles.container_form} onSubmit={onSave}>
//         <h1>NOVO VÍDEO</h1>
//         <h3>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h3>
//         <h2>Criar Card</h2>

//         <div className={styles.container_form_group}>
//           <div className={styles.form_group}>
//             <TextField
//               value={title}
//               aoAlterado={(valor) => setTitle(valor)}
//               label="Título"
//               type="text"
//               placeholder="Digite o título"
//               required
//             />
//           </div>
//           <div className={styles.form_group}>
//             <DropdownList
//               value={category}
//               aoAlterado={(valor) => setCategory(valor)}
//               label="Categoria"
//               itens={subjects}
//               placeholder="Selecione uma categoria"
//               required
//             />
//           </div>
//           <div className={styles.form_group}>
//             <TextField
//               value={video}
//               aoAlterado={(valor) => setVideo(valor)}
//               label="Vídeo"
//               type="text"
//               placeholder="Digite o link do vídeo"
//               required
//             />
//           </div>
//           <div className={styles.form_group}>
//             <TextField
//               value={description}
//               aoAlterado={(valor) => setDescription(valor)}
//               label="Descrição"
//               type="text"
//               placeholder="Sobre o que é esse vídeo?"
//               required
//             />
//           </div>
//         </div>

//         <div className={styles.container_button}>
//           <Button type="submit">GUARDAR</Button>
//           <Button type="button" onClick={resetInputs}>LIMPAR</Button>
//         </div>
//       </form>
//     </section>
//   );
// };