import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './Booking.module.css';
import { postBooking } from '../../Redux/actions/form_actions';
import axios from 'axios';
import {redirect} from "react-router-dom"

Modal.setAppElement('#root');

const Booking = () => {
  const field = useSelector((state) => state.currentField);
  const shift = field.shift; // Asumiendo que "shift" está dentro del objeto "currentField"

  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  const [formData, setFormData] = useState({
    day: '',
    initialHour: '',
    finalHour: '',
    totalTime: '',
    fieldId: field.id,
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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function generateTimeOptions() {
    let shiftHours = [];
  
    const shifts = shift.split(", ");
  
    if (shifts.includes("Mañana")) {
      shiftHours = shiftHours.concat(["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"]);
    }
    if (shifts.includes("Tarde")) {
      shiftHours = shiftHours.concat(["15:00","16:00", "17:00", "18:00", "19:00"]);
    }
    if (shifts.includes("Noche")) {
      shiftHours = shiftHours.concat(["20:00", "21:00", "22:00", "23:00"]);
    }
  
    const options = shiftHours.map((hour) => (
      <option key={hour} value={hour}>
        {hour}
      </option>
    ));
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
    
    if (!token) {
      setIsLoginModalOpen(true);
    } else if (!formData.userId) {
      setIsLoginModalOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePayment = (method) => {
     if (method === 'mercadopago') {
      const paymentData = {
        id: field.id,
        items: 1,
        title: field.name,
        description: `Reserva de la cancha ${field.name}`,
        image: field.image,
        price: field.price,
      };
      console.log(paymentData);
  
      axios
        .post("http://localhost:3001/payment/createOrder", paymentData)
        .then((response) => {
          window.location.href = response.data.body.init_point;
        })
        .catch((error) => console.log(error.message));
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

    useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('status');  
    if ( myParam === "approved") {
      dispatch(postBooking(formData));
      return redirect("/home")
    }
  })
  
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

           <label className={styles.formLabel}>Nombre cancha:</label>

          <input
            type="text"
            name="fieldId"
            value={formData.fieldId}
            onChange={handleChange}
            className={styles.formInput2}
            readOnly
          /> 
           <label className={styles.formLabel}>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}

            className={styles.formInput2}
          />  


*/} 

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
  className={styles.modal1} // Agrega la clase CSS del modal aquí
>
<button className={styles.modalbutton} onClick={() => setIsModalOpen(false)}>X</button>
  <h2>Selecciona el método de pago</h2>
  <div className={styles.botonPago}>
  <button onClick={() => handlePayment('mercadopago')}>MercadoPago</button>
  </div>
</Modal>
<Modal
  isOpen={isLoginModalOpen}
  onRequestClose={() => setIsLoginModalOpen(false)}
  contentLabel="Iniciar sesión"
  className={styles.modal1}
>
  <button className={styles.modalbutton} onClick={() => setIsLoginModalOpen(false)}>
    X
  </button>
  <h2>Para reservar, es necesario iniciar sesión</h2>
  <div className={styles.botonPago}>
    <a href="/login"> {/* Replace with the correct route to your signup component */}
      <button>Log In</button>
    </a>
  </div>
</Modal>
  </div>

);
};

export default Booking;