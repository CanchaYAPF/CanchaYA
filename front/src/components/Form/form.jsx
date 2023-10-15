import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import styles from './Form.module.css';
import { formCancha } from '../../Redux/actions/form_actions';

const FormularioCancha = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombreCancha: '',
    imagen: '',
    direccionCancha: '',
    ciudad: '',
    telefono: '',
    precioHora: '',
    turnos: [],
    metodosPago: [],
    servicios: [],
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

  const handleServicioChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, servicios: [...formData.servicios, value] });
    } else {
      setFormData({
        ...formData,
        servicios: formData.servicios.filter((servicio) => servicio !== value),
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

      <label className={styles.formLabel}>Imagen:</label>
      <input
        type="text"
        className={styles.formInput}
        name="imagen"
        value={formData.imagen}
        onChange={handleChange}
      />
      {formData.imagen && <img src={formData.imagen} alt="Imagen de la cancha" />}

      <label className={styles.formLabel}>Dirección de la Cancha:</label>
      <input
        type="text"
        className={styles.formInput}
        name="direccionCancha"
        value={formData.direccionCancha}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Ciudad:</label>
      <input
        type="text"
        className={styles.formInput}
        name="ciudad"
        value={formData.ciudad}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Teléfono:</label>
      <input
        type="text"
        className={styles.formInput}
        name="telefono"
        value={formData.telefono}
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

      <div className={styles.formLabel}>Servicios:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="estacionamiento"
        value="Estacionamiento"
        checked={formData.servicios.includes('Estacionamiento')}
        onChange={handleServicioChange}
      />
      Estacionamiento
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="tribunas"
        value="Tribunas"
        checked={formData.servicios.includes('Tribunas')}
        onChange={handleServicioChange}
      />
      Tribunas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="vestuarios"
        value="Vestuarios"
        checked={formData.servicios.includes('Vestuarios')}
        onChange={handleServicioChange}
      />
      Vestuarios
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="duchas"
        value="Duchas"
        checked={formData.servicios.includes('Duchas')}
        onChange={handleServicioChange}
      />
      Duchas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="kiosco"
        value="Kiosco"
        checked={formData.servicios.includes('Kiosco')}
        onChange={handleServicioChange}
      />
      Kiosco

      <button className={styles.formButton} onClick={handleSubmit}>Agregar</button>
    </div>
  );
};

export default FormularioCancha;