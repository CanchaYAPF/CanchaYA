import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; 
import styles from './Form.module.css';
import { formCancha } from '../../Redux/actions/form_actions';
import {validate} from '../../utils/utils'


const FormularioCancha = () => {
  const token = sessionStorage.getItem(`token`)

  useEffect(() => {
   if (token === null) navigate("/login")
  }, []);
   
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    address: '',
    city: '',
    phone: '',
    price: '',
    shift: [],
    paymentMethod: [],
    service: [],
    token:token
  });
  const [errors,setErrors]=useState({
    name: '',
    image: '',
    address: '',
    city: '',
    phone: '',
    price: '',
    shift: [],
    paymentMethod: [],
    service: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const validation= validate(name,value)
    setErrors(validation)
  };

  const handleTurnoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, shift: [...formData.shift, value] });
    } else {
      setFormData({
        ...formData,
        shift: formData.shift.filter((turno) => turno !== value),
      });
    }
  };

  const handleMetodoPagoChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, paymentMethod: [...formData.paymentMethod, value] });
    } else {
      setFormData({
        ...formData,
        paymentMethod: formData.paymentMethod.filter((metodo) => metodo !== value),
      });
    }
  };

  const handleServicioChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, service: [...formData.service, value] });
    } else {
      setFormData({
        ...formData,
        service: formData.service.filter((servicio) => servicio !== value),
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
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formInput}
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label >{errors.name}</label>

      <label className={styles.formLabel}>Imagen:</label>
      <input
        type="file"
        className={styles.formInput}
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <label >{errors.image}</label>
      {formData.image && <img src={formData.image} alt="Imagen de la cancha" />}

      <label className={styles.formLabel}>Dirección de la Cancha:</label>
      <input
        type="text"
        className={styles.formInput}
        name="address"
        value={formData.address}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Ciudad:</label>
      <input
        type="text"
        className={styles.formInput}
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Teléfono:</label>
      <input
        type="text"
        className={styles.formInput}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label className={styles.formLabel}>Precio por Hora:</label>
      <input
        type="text"
        className={styles.formInput}
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <div className={styles.formLabel}>Turnos Disponibles:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoManana"
        value="Mañana"
        checked={formData.shift.includes('Mañana')}
        onChange={handleTurnoChange}
      />
      Mañana
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoTarde"
        value="Tarde"
        checked={formData.shift.includes('Tarde')}
        onChange={handleTurnoChange}
      />
      Tarde
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="turnoNoche"
        value="Noche"
        checked={formData.shift.includes('Noche')}
        onChange={handleTurnoChange}
      />
      Noche

      <div className={styles.formLabel}>Métodos de Pago:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoEfectivo"
        value="Efectivo"
        checked={formData.paymentMethod.includes('Efectivo')}
        onChange={handleMetodoPagoChange}
      />
      Efectivo
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoDebito"
        value="Débito"
        checked={formData.paymentMethod.includes('Débito')}
        onChange={handleMetodoPagoChange}
      />
      Débito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoCredito"
        value="Crédito"
        checked={formData.paymentMethod.includes('Crédito')}
        onChange={handleMetodoPagoChange}
      />
      Crédito
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="metodoMercadoPago"
        value="MercadoPago"
        checked={formData.paymentMethod.includes('MercadoPago')}
        onChange={handleMetodoPagoChange}
      />
      MercadoPago

      <div className={styles.formLabel}>Servicios:</div>
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="estacionamiento"
        value="Estacionamiento"
        checked={formData.service.includes('Estacionamiento')}
        onChange={handleServicioChange}
      />
      Estacionamiento
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="tribunas"
        value="Tribunas"
        checked={formData.service.includes('Tribunas')}
        onChange={handleServicioChange}
      />
      Tribunas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="vestuarios"
        value="Vestuarios"
        checked={formData.service.includes('Vestuarios')}
        onChange={handleServicioChange}
      />
      Vestuarios
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="duchas"
        value="Duchas"
        checked={formData.service.includes('Duchas')}
        onChange={handleServicioChange}
      />
      Duchas
      <input
        type="checkbox"
        className={styles.formCheckbox}
        name="kiosco"
        value="Kiosco"
        checked={formData.service.includes('Kiosco')}
        onChange={handleServicioChange}
      />
      Kiosco

      <button className={styles.formButton} >Agregar</button>
      </form>
    </div>
  );
};

export default FormularioCancha;