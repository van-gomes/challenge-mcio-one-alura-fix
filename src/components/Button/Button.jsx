import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick} >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};