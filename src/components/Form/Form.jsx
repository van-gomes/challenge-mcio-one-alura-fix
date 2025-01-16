import TextField from '../TextField';
import style from './Form.module.css';

export const Form = () => {
    return (
        <div className={style.content__form}>
            <TextField label="Name" type="text" placeholder="Enter your name" />
            <TextField label="description" type="text" placeholder="Enter your description" />
            <TextField label="image" type="text" placeholder="Enter your image" />
            <TextField label="Video" type="text" placeholder="Enter your video" />
        </div>
    );
}