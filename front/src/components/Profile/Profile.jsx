import React, { useState } from 'react';
import style from './profile.module.css';
import Favorites from "../Favorites/Favorites"
import MyBookings from '../Booking/getbooking';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('mi-informacion');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style['profile-container']}>
      <div>
        <div>
          <button
            onClick={() => handleTabClick('mi-informacion')}
            className={`${style['tab-button']} ${activeTab === 'mi-informacion' ? style.active : ''}`}
          >
            Mi Información
          </button>
          <button
            onClick={() => handleTabClick('mis-favoritos')}
            className={`${style['tab-button']} ${activeTab === 'mis-favoritos' ? style.active : ''}`}
          >
            Mis Favoritos
          </button>
          <button
            onClick={() => handleTabClick('mis-reservas')}
            className={`${style['tab-button']} ${activeTab === 'mis-reservas' ? style.active : ''}`}
          >
            Mis Reservas
          </button>
        </div>

        <div className={style['tab-content']}>
          {activeTab === 'mi-informacion' && (
            <div>
              <h2 className={style['tab-title']}>Mi Información</h2>
              <p className={style['user-info']}>Nombre: Usuario</p>
              <p className={style['user-info']}>Apellido: Apellido</p>
              <p className={style['user-info']}>Email: usuario@example.com</p>
            </div>
          )}
          {activeTab === 'mis-favoritos' && (
            <div >
              <h2 className={style['mis-favoritos']}>Mis Favoritos</h2>
              <Favorites/>
              
            </div>
          )}
          {activeTab === 'mis-reservas' && (
            <div>
              <h2 className={style['tab-title']}>Mis Reservas</h2>
              <MyBookings/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
