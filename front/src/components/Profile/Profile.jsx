import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Profile.module.css';
import MyBookings from '../Booking/getbooking';
import Favorites from "../Favorites/Favorites";
import Admin from '../Admin/Admin/Admin';

const getUserDetails = async (token) => {
  try {
    const response = await axios.get('http://localhost:3001/user/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('mi-informacion');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('token'); 
    getUserDetails(token).then(details => setUserDetails(details));
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style['profile-container']}>
      <div>
        <div>
          <button
            onClick={() => handleTabClick('mi-informacion')}
            className={`${style['tab-button']} ${activeTab === 'mi-informacion' ? style.active : ''}`}>
            Mi Información
          </button>
          <button
            onClick={() => handleTabClick('mis-favoritos')}
            className={`${style['tab-button']} ${activeTab === 'mis-favoritos' ? style.active : ''}`}>
            Mis Favoritos
          </button>
          <button
            onClick={() => handleTabClick('mis-reservas')}
            className={`${style['tab-button']} ${activeTab === 'mis-reservas' ? style.active : ''}`}>
            Mis Reservas
          </button>
          <button onClick={()=> handleTabClick('administracion')} 
          className={`${style['tab-button']} ${activeTab === 'administracion' ? style.active : ''}`}>
            Administración</button>
        </div>

        <div className={style['tab-content']}>
          {activeTab === 'mi-informacion' && userDetails && (
            <div>
              <h2 className={style['tab-title']}>Mi Información</h2>
              <p className={style['user-info']}>Nombre: {userDetails.name}</p>
              <p className={style['user-info']}>Apellido: {userDetails.lastname}</p>
              <p className={style['user-info']}>Email: {userDetails.mail}</p>
              <p className={style['user-info']}>Fecha de nacimiento: {userDetails.birthdate}</p>
              <p className={style['user-info']}>Telefono: {userDetails.phone}</p>
            </div>
          )}
          {activeTab === 'mis-favoritos' && (
            <div >
              <h2 className={style['mis-favoritos']}>Mis Favoritos</h2>
              <Favorites />
            </div>
          )}
          {activeTab === 'mis-reservas' && (
            <div>
              <h2 className={style['tab-title']}>Mis Reservas</h2>
               <MyBookings/> 
            </div>
          )}
            {activeTab === 'administracion' && (
            <div >
              <h2 className={style['tab-title']}>Administracion</h2>
              <Admin />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;