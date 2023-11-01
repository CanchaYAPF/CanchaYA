/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../Redux/actions/admin_actions';
import axios from "axios";
import UserCard from './UserCard';


const UsersAdmin = () => {
  const getAllUsers = useSelector(state => state.getAllUsers);
  const notAllow = useSelector(state => state.error);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const jwtToken = sessionStorage.getItem(`token`)
  const googleToken= sessionStorage.getItem('googleToken')
  let token= jwtToken ? jwtToken : googleToken

  useEffect(() => {
    if (getAllUsers?.length === 0) {
      dispatch(getUsers());
      if (jwtToken === null && googleToken===null) navigate('/login');
    }
  }, [dispatch]);

  const handlerDesactive =async (id) => {
     try {
        const {data} = await axios.patch(`https://canchasyaback.onrender.com/admin/${id}`)
     } catch (error) {
        console.log(error)
     }

  };

  return (
    <div>
      {notAllow ? (
        <p>{notAllow}</p>
      ) : (
        <div>
          <p>Nombre</p>
          <p>Apellido</p>
          <p>E-mail</p>
          <p>Contraseña</p>
          <p>Teléfono</p>
          <p>Fecha de Nacimiento</p>
          <p>Role</p>
          <p>Status</p>
        </div>
      )}
      <div>
        {getAllUsers?.map(user => (
          <div key={user.id} id={user.id}>
            <UserCard user={user} />
            <button>Editar</button>
            <button onClick={()=>handlerDesactive(user.id)}>Desactivar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersAdmin;
