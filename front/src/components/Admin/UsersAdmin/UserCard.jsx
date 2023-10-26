/* eslint-disable react/prop-types */
const UserCard = ({user}) => {
    return(
        <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.lastname}</p>
            <p>{user.mail}</p>
            <p>{user.password}</p>
            <p>{user.phone}</p>
            <p>{user.birthdate}</p>
        </div>
    )
};
export default UserCard
