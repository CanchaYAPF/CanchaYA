import React from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <h1>Navbar</h1>
      </div>
      <button className={style.btn}>Agregar Cancha</button>
      <button className={style.btn}>Iniciar Sesión / Registrarse</button>
      <div className={style.search}>
        <input type="text" placeholder="Buscar..." />
      </div>
    </div>
  );
};

export default Home;
