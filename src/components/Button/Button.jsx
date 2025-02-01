import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children, onClick, colorButton }) => {
    return (
        <button className={styles.button} onClick={onClick} style={{ backgroundColor: colorButton }} >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    colorButton: PropTypes.string.isRequired
};