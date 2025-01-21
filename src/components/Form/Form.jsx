import Button from '../Button';
import { DropdownList } from '../DropdownList/DropdownList';
import TextField from '../TextField';
import styles from './Form.module.css';

export const Form = () => {
    const categories = [
        { id: 1, name: "Front-end" },
        { id: 2, name: "Back-end" },
        { id: 3, name: "Mobile" },
    ];

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log("Salvando...");
    }

    return (
        <section className={styles.form}>
            <form onSubmit={aoSalvar}>
                <h1>NOVO VÍDEO</h1>
                <h3>Complete o formulário para criar um novo card de vídeo.</h3>
                <h2>Criar Card</h2>
                
                <TextField label="Titulo" type="text" placeholder="Ingrese el título" />
                <DropdownList label="Categoria" itens={categories} placeholder="Selecione uma categoría" />
                <TextField required label="Imagem" type="text" placeholder="Digite o link do imagem" />
                <TextField required label="Video" type="text" placeholder="Digite o link do video" />
                <TextField required label="Descrição" type="text" placeholder="Sobre o que é esse vídeo?" />
                <Button>GUARDAR</Button>
                <Button>LIMPAR</Button>
            </form>
        </section>
    );
}