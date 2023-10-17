import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFieldById } from '../../Redux/actions/form_actions';
import style from './Details.module.css';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const field = useSelector(state => state.currentField); 

  useEffect(() => {
    dispatch(getFieldById(id));
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      <div className={style.contenido}>
      <h1>{field.name}</h1>
      <img src={field.image} alt={field.name} />
      
      <h2>Dirección: {field.address}</h2>
      <h2>Ciudad: {field.city}</h2>
      <h2>Teléfono: {field.phone}</h2>
      <h2>Precio: {field.price}</h2>
      
    </div>
      </div>
  );
}

export default Details;