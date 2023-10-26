/* eslint-disable no-unused-vars */
import React,{ useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../../Redux/actions/admin_actions'
import UserCard from './UserCard';

const UsersAdmin=()=>{
    
    const getAllUsers= useSelector(state => state.getAllUsers);
    const notAllow= useSelector(state=> state.error)
    const dispatch=useDispatch();
    useEffect(()=>{
        if(getAllUsers?.length===0)
        dispatch(getUsers())
    },[dispatch])

    const handlerDelete = (e)=>{

    }

    return(
    <div>
         <div>
            <p>Nombre</p>
            <p>Apellido</p>
            <p>E-mail</p>
            <p>Contraseña</p>
            <p>Teléfono</p>
            <p>Fecha de Nacimiento</p>
            <p>Role</p>
        </div>
        {notAllow ? <p>{notAllow}</p>:getAllUsers?.map(user=>{
         return <div key={user.id} id={user.id}><UserCard user={user} /> <button>Editar</button> <button onClick={handlerDelete}>Borrar</button></div>
        })}
    </div>
    )
}
export default UsersAdmin

