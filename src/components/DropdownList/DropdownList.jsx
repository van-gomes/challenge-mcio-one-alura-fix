import styles from './DropdownList.module.css';

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


