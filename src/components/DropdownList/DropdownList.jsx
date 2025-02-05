import PropTypes from "prop-types";
import styles from "./DropdownList.module.css";

export const DropdownList = ({ label, itens, value, aoAlterado, obrigatorio = false }) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <select required={obrigatorio} value={value} onChange={evento => aoAlterado(evento.target.value)}>
          <option value=""></option>
          {itens.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

DropdownList.propTypes = {
  label: PropTypes.string.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  value: PropTypes.string.isRequired,
  aoAlterado: PropTypes.func.isRequired,
  obrigatorio: PropTypes.bool
};


