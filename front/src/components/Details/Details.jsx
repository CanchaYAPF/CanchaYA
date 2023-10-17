import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFieldById } from '../../Redux/actions/form_actions';

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const field = useSelector(state => state.currentField); 

  useEffect(() => {
    dispatch(getFieldById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>Nombre: {field.name}</h2>
      <img src={field.image} alt={field.name} />
      {/* <p>Servicio: {field.service.join(', ')}</p> */}
      <p>Dirección: {field.address}</p>
      <p>Ciudad: {field.city}</p>
      <p>Teléfono: {field.phone}</p>
      <p>Precio: {field.price}</p>
      {/* <p>Método de pago: {field.paymentMethod.join(', ')}</p> */}
      {/* <p>Turno: {field.shift.join(', ')}</p> */}
    </div>
  );
}

export default Details;