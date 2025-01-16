import TextField from '../TextField';
import style from './Form.module.css';

export const Form = () => {
    return (
        <form className={style.container__form}>
            <TextField label="Name" type="text" placeholder="Enter your name" />
            <TextField label="description" type="text" placeholder="Enter your description" />
            <TextField label="image" type="text" placeholder="Enter your image" />
        </form>
    );
}