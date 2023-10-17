import React from 'react'
import style from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import OrderByPrice from '../Order/orderByPrice'; 

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home"
  
  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link to={"/home"} style={{ font: '28px Poppins, sans-serif' }}>Canchas Ya</Link>
        </div>
      {/* {isHomePage ? null : (
        <div>
        <Link to={'/login'}><button className={style.btn}>Iniciar Sesión</button></Link>
        <Link to={'/signup'}><button className={style.btn}>Registrarse</button></Link>
        </div>
      )} */}
      <div className={style.btnContainer}>
      <Link to={'/form'}><button className={style.btn}>Agregar Cancha</button></Link>
      </div>
      </div>
      <div className={style.text}>
        <div className={style.texto}>
        <h1 className={style.verde}>NO TE QUEDES SIN JUGAR</h1>
        <h1>ENCUENTRA LA CANCHA MAS CERCANA A TI</h1>
        </div>
      </div>
      <div className={style.nav}>
        <div className={style.filtros}>
        <button>Ciudad</button>
        <button>Deporte</button>
        <button>Fecha</button>
        <button>Hora</button>
        <OrderByPrice />
        </div>
      <div className={style.search}>
        <input type="text" placeholder="Buscar cancha por nombre" />
      </div>
      </div>
    </div>
  )
}

export default NavBar

