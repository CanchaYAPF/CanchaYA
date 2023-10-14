import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import styles from './Form.module.css';


const FormularioCancha = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombreCancha: '',
    direccionCancha: '',
    telefono: '',
    email: '',
    precioHora: '',
    turnos: [],
    metodosPago: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTurnoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, turnos: [...formData.turnos, value] });
    } else {
      setFormData({
        ...formData,
        turnos: formData.turnos.filter((turno) => turno !== value),
      });
    }
  };

  const handleMetodoPagoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, metodosPago: [...formData.metodosPago, value] });
    } else {
      setFormData({
        ...formData,
        metodosPago: formData.metodosPago.filter((metodo) => metodo !== value),
      });
    }
  };

  const handleSubmit = () => {
    dispatch(formCancha(formData));
  };

  return (
    <div className={styles.formContainer}>
      <Link to="/">Volver al Inicio</Link>
      <label className={styles.formLabel}>Nombre de Cancha:</label>
      <input
        type="text"
        className={styles.formInput}
        name="nombreCancha"
        value={formData.nombreCancha}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Dirección de la Cancha:</label>
      <input
        type="text"
        className={styles.formInput}
        name="direccionCancha"
        value={formData.direccionCancha}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Número de Teléfono:</label>
      <input
        type="text"
        className={styles.formInput}
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Correo Electrónico:</label>
      <input
        type="text"
        className={styles.formInput}
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Precio por Hora:</label>
      <input
        type="text"
        className={styles.formInput}
        name="precioHora"
        value={formData.precioHora}
        onChange={handleChange}
      />

      <div className={styles.formLabel}>Turnos Disponibles:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoManana"
        value="Mañana"
        checked={formData.turnos.includes('Mañana')}
        onChange={handleTurnoChange}
      />
      Mañana
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoTarde"
        value="Tarde"
        checked={formData.turnos.includes('Tarde')}
        onChange={handleTurnoChange}
      />
      Tarde
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoNoche"
        value="Noche"
        checked={formData.turnos.includes('Noche')}
        onChange={handleTurnoChange}
      />
      Noche

      <div className={styles.formLabel}>Métodos de Pago:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoEfectivo"
        value="Efectivo"
        checked={formData.metodosPago.includes('Efectivo')}
        onChange={handleMetodoPagoChange}
      />
      Efectivo
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoDebito"
        value="Débito"
        checked={formData.metodosPago.includes('Débito')}
        onChange={handleMetodoPagoChange}
      />
      Débito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoCredito"
        value="Crédito"
        checked={formData.metodosPago.includes('Crédito')}
        onChange={handleMetodoPagoChange}
      />
      Crédito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoMercadoPago"
        value="MercadoPago"
        checked={formData.metodosPago.includes('MercadoPago')}
        onChange={handleMetodoPagoChange}
      />
      MercadoPago

      <button className={styles.formButton} onClick={handleSubmit}>Agregar</button>
    </div>
  );
};

export default FormularioCancha;
