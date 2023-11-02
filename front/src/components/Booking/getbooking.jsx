import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../Redux/actions/form_actions';
import styles from './myBooking.module.css'; // Importar los estilos modulares
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'
import FormReview from "../Review/Review"
import Agregar from "../Iconos/boton-agregar.png"

function MyBookings() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.bookingData);
  const [currentTime, setCurrentTime] = useState(new Date()); // Obtener la hora actual
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [openModals, setOpenModals] = useState({});

  const openModal = (bookingId) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [bookingId]: true,
    }));
  }; 
  const closeModal = (bookingId) => {
    setOpenModals((prevOpenModals) => ({
      ...prevOpenModals,
      [bookingId]: false,
    }));
  };
  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Mis Reservas</h2>
      <div className={styles.bookingcards}>
      <Link to="/home" className={styles.bookingcard} style={{ textDecoration: 'none' }}>
        
          <h3>Agregar Reserva</h3>
          <p>Haz clic aquí para buscar una cancha y hacer una nueva reserva</p>
          <img src={Agregar} alt="Agregar Reserva" />
          
        </Link>

      
        {bookingData?.map((booking) => {
          const bookingStartTime = new Date(booking.day + ' ' + booking.initialHour);
          const bookingEndTime = new Date(booking.day + ' ' + booking.finalHour);

          const isCompleted = currentTime > bookingEndTime;
          const isNotPlayed = currentTime < bookingStartTime;
          const bookingId = booking.id;
          <Link to="/home" className={styles.bookingcard} style={{ textDecoration: 'none' }}>
          <h3>Agregar Nueva Reserva</h3>
          <p>Haz clic aquí para agregar una nueva reserva &#43;</p>
        </Link>


          return (
            <div className={styles.bookingcard} key={booking.id}>
              <h3>Reserva</h3>
              <p>Nombre de la cancha: {booking.fieldName}</p>
              <p>Día: {booking.day}</p>
              <p>Hora de inicio: {booking.initialHour}</p>
              <p>Hora final: {booking.finalHour}</p>
              <p>Tiempo total: {booking.totalTime} horas</p>
              <p>Nombre Usuario: {booking.userName}</p>

              {/* Agregar clases al párrafo del estado utilizando estilos modulares */}
              
             
              <p className={isCompleted ? styles.completed : (isNotPlayed ? styles.notPlayed : '')}>
                Estado: {isCompleted ? 'Completado' : (isNotPlayed ? 'No jugado' : '')}
              </p>

              {booking.fieldImage !== 'N/A' && (
                <img src={booking.fieldImage} alt="Imagen de la cancha" />
              )}
              {isCompleted && (
                <>
                  <button onClick={() => openModal(bookingId)}>Calificanos</button>
                  {openModals[bookingId] && (
                    <div className={styles.modal}>
                      <button onClick={() => closeModal(bookingId)}>Cerrar</button>
                      <FormReview fieldId={booking.fieldId} />
                      
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBookings;
