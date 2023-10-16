import React from 'react'
import style from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home"
  
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <h1>Navbar</h1>
      </div>
      {isHomePage ? null : (
        <div>
          <Link to={'/login'}><button className={style.btn}>Iniciar Sesión</button></Link>
          <Link to={'/signup'}><button className={style.btn}>Registrarse</button></Link>
        </div>
      )}
      <Link to={'/form'}><button className={style.btn}>Agregar Cancha</button></Link>
      <div className={style.search}>
        <input type="text" placeholder="Buscar..." />
      </div>
    </div>
  )
}

export default NavBar
