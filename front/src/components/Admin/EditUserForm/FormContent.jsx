import styles from './FormContent.module.css';

const FormContent = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className={styles.modalContent}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Apellido:
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Correo:
          <input type="email" name="mail" value={formData.mail} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Teléfono:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Fecha de nacimiento:
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} className={styles.formInput} />
        </label>
        <button type="submit" className={styles.editUserButton}>Actualizar usuario</button>
      </form>
    </div>
  );
};

export default FormContent;