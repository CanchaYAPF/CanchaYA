/* eslint-disable react/prop-types */
import style from './UserCard.module.css';
const UserCard = ({user, handlerDesactive}) => {
    return(
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
                <button className={style['btn-table']}>Editar</button>
                <button className={style['btn-table']} onClick={()=>handlerDesactive(user.id)}>Desactivar</button>
            </td>
        </tr>
    )
};
export default UserCard;