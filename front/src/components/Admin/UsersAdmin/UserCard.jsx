/* eslint-disable react/prop-types */
import style from './UserCard.module.css';
import { useState } from 'react';
import UserEdit from './UserEdit';
const UserCard = ({user, handlerDesactive}) => {
      //modal para form de edit
  const[setEditUserModalOpen] = useState(false);
  const openEditUserModal=()=>{
    setEditUserModalOpen(true)
  }
  const closeEditUserModal=()=>{
    setEditUserModalOpen(false)
  }
    return(
        <div>
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.mail}</td>
            <td>{user.password}</td>
            <td>{user.phone}</td>
            <td>{user.birthdate}</td>
            <td>{user.roles}</td>
            <td>{user.status ? "Activo": "Desactivo"}</td>
            <td>
                <button className={style['btn-table']} onClick={()=>openEditUserModal()}>Editar</button>
                <button className={style['btn-table']} onClick={()=>handlerDesactive(user.id)}>Desactivar</button>
            </td>
        </tr>
        <div>
            <button onClick={closeEditUserModal}>Cerrar</button>
            <UserEdit/></div>
        </div>
    )
};
export default UserCard;