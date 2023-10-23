import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBookings } from '../../Redux/actions/form_actions'; 

function MyBookings() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.bookingData);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  return (
    <div>
      <h2>Mis Reservas</h2>
      <div className="booking-cards">
        {bookingData.map((booking) => (
          <div className="booking-card" key={booking.id}>
            <h3>Reserva</h3>
            <p>Día: {booking.day}</p>
            <p>Hora de inicio: {booking.initialHour}</p>
            <p>Hora final: {booking.finalHour}</p>
            <p>Tiempo total: {booking.totalTime} horas</p>
            <p>Nombre del usuario: {booking.userName}</p>
            <p>Nombre de la cancha: {booking.fieldName}</p>
            {booking.fieldImage !== 'N/A' && (
              <img src={booking.fieldImage} alt="Imagen de la cancha" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;

