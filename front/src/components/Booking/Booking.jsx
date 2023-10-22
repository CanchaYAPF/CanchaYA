import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './Booking.module.css';
import { postBooking } from '../../Redux/actions/form_actions';
import axios from 'axios';

Modal.setAppElement('#root');

const Booking = () => {
  const field = useSelector((state) => state.currentField);
  const dispatch = useDispatch();

  const token = sessionStorage.getItem('token');
  const [formData, setFormData] = useState({
    day: '',
    initialHour: '',
    finalHour: '',
    totalTime: '',
    fieldName: field.name,
    userId: token,
  });

  useEffect(() => {
    // Aquí, verifica si el campo "totalTime" cumple con los requisitos
    if (!isNaN(formData.totalTime) && formData.totalTime > 0 && formData.totalTime < 9) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formData.totalTime]);

  const [isFormComplete, setIsFormComplete] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  function generateTimeOptions() {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = String(hour).padStart(2, '0');
      const time = `${formattedHour}:00`;
      options.push(
        <option key={time} value={time}>
          {time}
        </option>
      );
    }
    return options;
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value)

    
  
    if (name === "initialHour") {
      const initialTime = value;
      const finalTimeOptions = generateTimeOptions().filter((timeOption) => {
        const time = timeOption.props.value;
        return time >= initialTime;
      });
      setFormData({
        ...formData,
        initialHour: value,
        finalHour: finalTimeOptions[0].props.value, 
        totalTime: '',
      });
    } else if (name === "finalHour") {
      const initialTime = formData.initialHour;
      const finalTime = value;
  
      if (initialTime) {
        const initial = new Date(`2000-01-01T${initialTime}:00`);
        const final = new Date(`2000-01-01T${finalTime}:00`);
        const totalTime = (final - initial) / 3600000; // 3600000 ms en una hora
        setFormData({ ...formData, [name]: value, totalTime });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
  
    const allFieldsComplete = Object.values(formData).every((value, name) => {
      if (name === 'totalTime') {
        return !isNaN(value) && value > 0 && value < 9;
      } else if (typeof value === 'string') {
        return value.trim() !== '';
      }
      return true;
    });
  
    
    setIsFormComplete(allFieldsComplete);
  };
  
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Resto del código
  };

  const handlePayment = (method) => {
    // Realizar la acción correspondiente según el método de pago seleccionado
    if (method === 'efectivo') {
      // Realizar el POST
      dispatch(postBooking(formData));
      alert('Reserva creada');
    } else if (method === 'mercadopago') {
      // Resto del código
    }
    setIsModalOpen(false);
    setFormData({
      day: '',
      initialHour: '',
      finalHour: '',
      totalTime: '',
      fieldName: '',
      userId: token,
    });
  };



  return (
    <div className={styles.master}>
    <div className={styles.containerbooking}>
      <div className={styles.bookingContainer}>
        <form onSubmit={handleSubmit}>
          <label className={styles.formLabel}>Día:</label>
          <input
            type="date"
            name="day"
            value={formData.day}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Hora Inicial:</label>
<select
  name="initialHour"
  value={formData.initialHour}
  onChange={handleChange}
  className={styles.formInput}
>
  {generateTimeOptions()}
</select>

<label className={styles.formLabel}>Hora Final:</label>
<select
  name="finalHour"
  value={formData.finalHour}
  onChange={handleChange}
  className={styles.formInput}
>
  {generateTimeOptions()}
</select>
          <label className={styles.formLabel}>Total de horas:</label>
          <input
            type="number"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange}
            className={styles.formInput}
            readOnly
          />
          {/* <label className={styles.formLabel}>Nombre cancha:</label>
          <input
            type="text"
            name="fieldName"
            value={formData.fieldName}
            onChange={handleChange}
            className={styles.formInput2}
            readOnly
          /> */}
          {/* <label className={styles.formLabel}>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}

            className={styles.formInput2}
          /> */}
          {isFormComplete && formData.totalTime > 0 && formData.totalTime < 9 && (
  <button type="submit" className={styles.bookingButton}>Reservar</button>
)}

           
         
           
        </form>
      </div>
    </div>
    <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setIsModalOpen(false)}
    contentLabel="Seleccionar método de pago"
  >
    <h2>Selecciona el método de pago</h2>
    <div className={styles.botonPago}>
    <button onClick={() => handlePayment('efectivo')}>Efectivo</button>
    <button onClick={() => handlePayment('mercadopago')}>MercadoPago</button>
    </div>
  </Modal>
  </div>

);
};

export default Booking;
