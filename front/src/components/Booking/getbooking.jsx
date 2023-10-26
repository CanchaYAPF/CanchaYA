import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../Redux/actions/form_actions';
import styles from './myBooking.module.css'; // Importar los estilos modulares
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom'

function MyBookings() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.bookingData);
  const [currentTime, setCurrentTime] = useState(new Date()); // Obtener la hora actual

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Mis Reservas</h2>
      <div className={styles.bookingcards}>
        {bookingData.map((booking) => {
          // Convertir las fechas y horas a objetos Date para comparación
          const bookingStartTime = new Date(booking.day + ' ' + booking.initialHour);
          const bookingEndTime = new Date(booking.day + ' ' + booking.finalHour);

          // Comparar con la hora actual
          const isCompleted = currentTime > bookingEndTime;
          const isNotPlayed = currentTime < bookingStartTime;

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
                <Link to="/home">
                  <button>Calificanos</button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyBookings;
