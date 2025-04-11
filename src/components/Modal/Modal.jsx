import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};
