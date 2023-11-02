import style from './UserCard.module.css';
import UserEdit from './UserEdit';

const UserCard = ({user, handlerDesactive, getUsers}) => {
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
                <div className={style['button-container']}> {/* Añade este div */}
                    <UserEdit user={user} getUsers={getUsers} />
                    <button className={style['btn-table']} onClick={()=>handlerDesactive(user.id)}>Desactivar</button>
                </div>
            </td>
        </tr>
    )
};

export default UserCard;