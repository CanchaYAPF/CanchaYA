import React from 'react';
import style from './Home.module.css';
import NavBar from '../NavBar/NavBar';


const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <NavBar/>
      </div>
      <button className={style.btn}>Agregar Cancha</button>
      <button className={style.btn}>Iniciar Sesión / Registrarse</button>
    </div>
  );
};

export default Home;
