import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <h1>Navbar</h1>
      </div>
      <Link to="/agregar-cancha" className={style.btn}>
        Agregar Cancha
      </Link>
      <button className={style.btn}>Iniciar Sesión / Registrarse</button>
      <div className={style.search}>
        <input type="text" placeholder="Buscar..." />
      </div>
    </div>
  );
};

export default Home;
