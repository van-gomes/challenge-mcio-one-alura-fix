import styles from './TextField.module.css';

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
