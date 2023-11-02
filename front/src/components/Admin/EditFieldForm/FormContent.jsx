import styles from './FormContent.module.css'; 

const FormContent = ({ formData, handleChange, handleShiftChange, handleServiceChange, handleSubmit }) => {
  return (
    <div className={styles.modalContent}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Deportes:
          <input type="text" name="sports" value={formData.sports} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Servicios:
          <input type="checkbox" name="estacionamiento" value="Estacionamiento" checked={Array.isArray(formData.service) && formData.service.includes('Estacionamiento')} onChange={handleServiceChange} />
          Estacionamiento
          <input type="checkbox" name="tribunas" value="Tribunas" checked={Array.isArray(formData.service) && formData.service.includes('Tribunas')} onChange={handleServiceChange} />
          Tribunas
          <input type="checkbox" name="vestuarios" value="Vestuarios" checked={Array.isArray(formData.service) && formData.service.includes('Vestuarios')} onChange={handleServiceChange} />
          Vestuarios
          <input type="checkbox" name="duchas" value="Duchas" checked={Array.isArray(formData.service) && formData.service.includes('Duchas')} onChange={handleServiceChange} />
          Duchas
          <input type="checkbox" name="kiosco" value="Kiosco" checked={Array.isArray(formData.service) && formData.service.includes('Kiosco')} onChange={handleServiceChange} />
          Kiosco
        </label>
        <label className={styles.formLabel}>
          Horarios:
          <input type="checkbox" name="morning" value="Mañana" checked={Array.isArray(formData.shift) && formData.shift.includes('Mañana')} onChange={handleShiftChange} />
          Mañana
          <input type="checkbox" name="afternoon" value="Tarde" checked={Array.isArray(formData.shift) && formData.shift.includes('Tarde')} onChange={handleShiftChange} />
          Tarde
          <input type="checkbox" name="night" value="Noche" checked={Array.isArray(formData.shift) && formData.shift.includes('Noche')} onChange={handleShiftChange} />
          Noche
        </label>
        <label className={styles.formLabel}>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Teléfono:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Precio por hora:
          <input type="text" name="price" value={formData.price} onChange={handleChange} className={styles.formInput} />
        </label>
        <button type="submit" className={styles.editFieldButton}>Actualizar cancha</button>
      </form>
    </div>
  );
};

export default FormContent;