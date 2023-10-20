import React, { useState } from 'react'
import style from './Navbar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = ({ handleSearchChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/home"

  const [selectValue, setSelectValue] = useState('Perfil');

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('googleToken');
    navigate("/login");
  }

  const handleProfileOptionChange = (event) => {
    setSelectValue(event.target.value);
    switch (event.target.value) {
      case 'profile':
        navigate("/profile");
        break;
      case 'logout':
        handleLogout();
        break;
      default:
        break;
    }
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.navbar}>
        <div className={style.logo}>
          <Link to={"/home"} style={{ font: '28px Poppins, sans-serif' }}>Canchas Ya</Link>
        </div>
        <div className={style.search}>
          <input
            type="search"
            placeholder="Buscar cancha por nombre" 
            onChange={handleSearchChange}
          />
        </div>
        <div className={style.btnContainer}>
          <Link to={'/form'}><button className={style.btn}>Agregar Cancha</button></Link>
          {sessionStorage.getItem('token') || sessionStorage.getItem('googleToken') ? (
            <select value={selectValue} onChange={handleProfileOptionChange} className={style.btn}>
              <option value="profile">Ver Perfil</option>
              <option value="logout">Cerrar Sesión</option>
            </select>
          ) : null}
        </div>
      </div>
      <div className={style.text}>
        <div className={style.texto}>
          <h1 className={style.verde}>NO TE QUEDES SIN JUGAR</h1>
          <h1 className={style.blanco}>ENCUENTRA LA CANCHA MAS CERCANA A TI</h1>
        </div>
      </div>
    </div>
  )
}

export default NavBar