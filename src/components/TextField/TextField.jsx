import styles from './TextField.module.css';
import PropTypes from 'prop-types';

export const TextField = ({ label, type, placeholder, value, onChange }) => {
    return (
        <div className={styles.container__text_field}>
        <label>{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            required
        />
        </div>
    );
}

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}; 