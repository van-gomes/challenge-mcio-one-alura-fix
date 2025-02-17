import styles from "./Button.module.css";

export const Button = ({ children, onClick, colorButton, className }) => {
    return (
        <button 
            className={`${styles.button} ${className || ""}`}
            onClick={onClick} 
            style={{ backgroundColor: colorButton, borderColor: colorButton }}
        >
            {children}
        </button>
    );
};