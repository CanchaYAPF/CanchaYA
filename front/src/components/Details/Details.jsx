import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getFieldById } from '../../Redux/actions/form_actions';
import style from './Details.module.css';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

function Details() {

 
  const handlePaymentMercado = () => {

      const paymentData = {
        id: field.id, 
        title: field.name, 
        description: `Reserva de la cancha ${field.name}`, 
        image: field.image, 
        price: field.price, 
      };

  
    axios
      .post("http://localhost:3001/createOrder", paymentData)
      .then((response) => {
        window.location.href = response.data.body.init_point;
      })
      .catch((error) => console.log(error.message));
  };
  

  const { id } = useParams();
  const dispatch = useDispatch();

  const field = useSelector(state => state.currentField);

  useEffect(() => {
    dispatch(getFieldById(id));
  }, [dispatch, id]);

  return (
    <div>
      <NavBar />
      <div className={style.container}>

        <div className={style.contenido}>
          <h1>{field.name}</h1>
          <img src={field.image} alt={field.name} />

          <h2>Deporte: {field.sports}</h2>
          <h2>Ciudad: {field.city}</h2>
          <h2>Dirección: {field.address}</h2>
          <h2>Horario: {field.shift}</h2>
          <h2>Servicio: {field.service}</h2>
          <h2>Teléfono: {field.phone}</h2>
          <h2>Precio: {field.price}</h2>
          <h2>Metodos de Pago: {field.paymentMethod}</h2>

          <button onClick={handlePaymentMercado}>Pagar ahora con mercado pago</button>

        </div>
      </div>
    </div>
  );
}

export default Details;