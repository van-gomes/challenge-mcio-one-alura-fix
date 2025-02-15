import styles from './Button.module.css';

export const Button = ({ children, onClick, colorButton }) => {
    return (
        <button 
            className={styles.button} 
            onClick={onClick} 
            style={{ backgroundColor: colorButton, borderColor: colorButton }}
        >
            {children}
        </button>
    );
}