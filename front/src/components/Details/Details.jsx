import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFieldById } from '../../Redux/actions/form_actions';
import style from './Details.module.css';
import Booking from '../Booking/Booking';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const field = useSelector(state => state.currentField);
  const [isBookingModalOpen, setBookingModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getFieldById(id));
  }, [dispatch, id]);

  const openBookingModal = () => {
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <img src={field.image} alt={field.name} />
      </div>
      <div className={style.rightContent}>
        <h1>{field.name}</h1>
        <h2>Deporte: {field.sports}</h2>
        <h2>Ciudad: {field.city}</h2>
        <h2>Dirección: {field.address}</h2>
        <h2>Precio por hora: {field.price}</h2>
        <h2>Turno: {field.shift}</h2>
        <h2>Servicios extras: {field.service}</h2>
        <button onClick={openBookingModal}>Reservar</button>
        {isBookingModalOpen && (
          <div className={style.modal}>
            <div className={`${style.modalcontent} ${isBookingModalOpen ? style.animated : ''}`}>
              <button onClick={closeBookingModal}>Cerrar</button>
              <Booking />
            </div>
          </div>
        )}
      </div>
    </div> 
  );
}

export default Details;

