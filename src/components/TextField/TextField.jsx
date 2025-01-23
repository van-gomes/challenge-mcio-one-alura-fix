import styles from './TextField.module.css';
import PropTypes from 'prop-types';

export const TextField = ({
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className={styles.textField}>
      <label>{label}</label>
      <input
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  valor: PropTypes.string,
  aoAlterado: PropTypes.func.isRequired,
  obrigatorio: PropTypes.bool,
};
