import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import styles from './Booking.module.css'; // Asegúrate de importar tu archivo CSS
import { postBooking } from '../../Redux/actions/form_actions';

Modal.setAppElement('#root'); // Reemplaza '#root' con el selector del elemento raíz de tu aplicación


const Booking = () => {

    const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    day: '',
    initialHour: '',
    finalHour: '',
    totalTime: '',
    fieldName: '',
    userId: '',
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Verificar si todos los campos están completos
    const allFieldsComplete = Object.values(formData).every((value) => value.trim() !== '');
    setIsFormComplete(allFieldsComplete);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsModalOpen(true);
    // dispatch(postBooking(formData));
    // alert("reserva creada")
    // setFormData({
    //     day: '',
    //     initialHour: '',
    //     finalHour: '',
    //     totalTime: '',
    //     fieldName: '',
    //     userId: '',
    //   });
    
  };

  const handlePayment = (method) => {
    // Realizar la acción correspondiente según el método de pago seleccionado
    if (method === 'efectivo') {
      // Realizar el POST
      dispatch(postBooking(formData));
      alert('Reserva creada');
    } else if (method === 'mercadopago') {
      // Mostrar un mensaje o redirigir a una página de MercadoPago
      alert('Estamos trabajando en eso');
    }

    // Cerrar el modal
    setIsModalOpen(false);

    // Limpiar los datos del formulario
    setFormData({
      day: '',
      initialHour: '',
      finalHour: '',
      totalTime: '',
      fieldName: '',
      userId: '',
    });
  };




  return (
    <div>
    <div className={styles.containerbooking}>
      <div className={styles.bookingContainer}>
        <form onSubmit={handleSubmit}>
          <label className={styles.formLabel}>Day:</label>
          <input
            type="date"
            name="day"
            value={formData.day}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Initial Hour:</label>
          <input
            type="time"
            name="initialHour"
            value={formData.initialHour}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Final Hour:</label>
          <input
            type="time"
            name="finalHour"
            value={formData.finalHour}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Total Time:</label>
          <input
            type="number"
            name="totalTime"
            value={formData.totalTime}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>Field Name:</label>
          <input
            type="text"
            name="fieldName"
            value={formData.fieldName}
            onChange={handleChange}
            className={styles.formInput}
          />
          <label className={styles.formLabel}>User ID:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className={styles.formInput}
          />
          
          
            <button type="submit" className={styles.formButton}>Reservar</button>
           
        </form>
      </div>
    </div>
    <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setIsModalOpen(false)}
    contentLabel="Seleccionar método de pago"
  >
    <h2>Selecciona el método de pago</h2>
    <button onClick={() => handlePayment('efectivo')}>Efectivo</button>
    <button onClick={() => handlePayment('mercadopago')}>MercadoPago</button>
  </Modal>
  </div>

);
};

export default Booking;
