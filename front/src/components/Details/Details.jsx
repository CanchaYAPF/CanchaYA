import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { getFieldById } from '../../Redux/actions/form_actions';
import style from './Details.module.css';
/* import NavBar from '../NavBar/NavBar'; */

function Details() {
 
  const { id } = useParams();
  const dispatch = useDispatch();

  const field = useSelector(state => state.currentField); 

  useEffect(() => {
    dispatch(getFieldById(id));
  }, [dispatch, id]);

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
      <Link to="/booking" className={style.link}>
        Reservar
      </Link>
    </div>
  </div>
  );
}

export default Details;