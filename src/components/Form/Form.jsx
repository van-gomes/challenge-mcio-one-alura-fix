import TextField from '../TextField';
import styles from './Form.module.css';

export const Form = () => {
    return (
        <section className={styles.form}>
            <form>
                <h1>NOVO VÍDEO</h1>
                <h2>Complete o formulário para criar um novo card de vídeo.</h2>
                <TextField label="Name" type="text" placeholder="Enter your name" />
                <TextField label="image" type="text" placeholder="Enter your image" />
                <TextField label="Video" type="text" placeholder="Enter your video" />
                <TextField label="description" type="text" placeholder="Enter your description" />
            </form>
        </section>
    );
}