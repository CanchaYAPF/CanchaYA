import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFieldById } from '../../Redux/actions/form_actions';
import style from './Details.module.css';
import Booking from '../Booking/Booking';

import Reviews from "../Review/getReviews"

import GoogleMap from './GoogleMap'; // Importa el componente de GoogleMap


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
        <GoogleMap googleMapsUrl={field.googleMapsUrl} /> {/* Agrega el componente GoogleMap aquí */}
      </div>
      <div className={style.rightContent}>
        <div className={style.contentWrapper}>
          <h2>{field.sports}</h2>
          <h1>{field.name}</h1>
          <h2>{field.city} | {field.address}</h2>
          <h2 className={style.precio}>PRECIO POR HORA: ${field.price}</h2>
          <h2>HORARIOS EN LOS QUE TRABAJAMOS:</h2>
          <h4>{field.shift}</h4>
          <h2>SERVICIOS EXTRAS DEL ESTABLECIMIENTO:</h2>
          <h4>{field.service}</h4>
          <button onClick={openBookingModal} className={style.btn}>Reservar</button>
          {isBookingModalOpen && (
            <div className={style.modal}>
              <div className={`${style.modalcontent} ${isBookingModalOpen ? style.animated : ''}`}>
                <button onClick={closeBookingModal} className={style.btn}>Cerrar</button>
                <Booking />
              </div>
            </div>
          )}
          <Reviews idField={id} className={style.reviews}/> {/* Mueve el componente Reviews aquí */}
        </div>
      </div>
    </div> 
  );
}

export default Details;