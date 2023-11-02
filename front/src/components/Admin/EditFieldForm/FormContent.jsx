import styles from './FormContent.module.css'; 

const FormContent = ({ formData, handleInputChange, handleSportChange, handleShiftChange, handleServiceChange, handleSubmit, sports }) => {
  return (
    <div className={styles.modalContent}>
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={styles.formInput} />
        </label>
        <div className={styles.formLabel}>Deportes:</div>
        {sports.map((sport, index) => (
          <div key={index} className={styles.sportLabel}>
            <input
              type="checkbox"
              name={sport}
              value={sport}
              checked={!!formData.sports[sport]}
              onChange={handleSportChange}
            />
            {sport}
          </div>
        ))}
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
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Teléfono:
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Precio por hora:
          <input type="text" name="price" value={formData.price} onChange={handleInputChange} className={styles.formInput} />
        </label>
        <button type="submit" className={styles.editFieldButton}>Actualizar cancha</button>
      </form>
    </div>
  );
};

export default FormContent;