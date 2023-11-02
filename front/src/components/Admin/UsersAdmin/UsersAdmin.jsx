/* eslint-disable no-unused-vars */
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../../Redux/actions/admin_actions';
import axios from "axios";
import UserCard from './UserCard';

const UsersAdmin = () => {
  const allUsers = useSelector(state => state.getAllUsers);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  
  const jwtToken = sessionStorage.getItem(`token`)
  const googleToken= sessionStorage.getItem('googleToken')
  let token= jwtToken ? jwtToken : googleToken


  useEffect(() => {
    if (allUsers?.length === 0) {
      dispatch(getUsers());
      if (token===null) navigate('/login');
    }
  }, [dispatch]);

  const handlerDesactive = async (id) => {
    try {
      const {data} = await axios.patch(`https://canchasyaback.onrender.com/admin/desactive/${id}`,  {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    
      dispatch(getUsers()); 
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div style={{ overflow: 'auto', maxHeight: '500px' }}>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>E-mail</th>
            <th>Contraseña</th>
            <th>Teléfono</th>
            <th>Fecha de Nacimiento</th>
            <th>Role</th>
            <th>Status</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map(user => (
            <UserCard key={user.id} user={user} handlerDesactive={handlerDesactive} getUsers={getUsers} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersAdmin;