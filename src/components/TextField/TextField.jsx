import styles from './TextField.module.css';
import PropTypes from 'prop-types';

export const TextField = ({ label, type, placeholder, value, aoAlterado }) => {
  return (
      <div className={styles.container_text_field}>
          <label>{label}</label>
          <input 
              type={type} 
              placeholder={placeholder} 
              value={value}
              onChange={evento => aoAlterado(evento.target.value)}
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
  aoAlterado: PropTypes.func.isRequired,
};
