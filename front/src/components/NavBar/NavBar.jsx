import React, { useState } from 'react';
import style from './Navbar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import logo from './logotipo-canchasya.png';

const NavBar = ({ handleSearchChange }) => {
  const location = useLocation();
  const navigate = useNavigate(); 

  const isHomePage = location.pathname === '/home';

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const logoutFunction = async () => {
    localStorage.removeItem('token');

    navigate('/login');
  };

  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className={style.homeContainer}>
      {!isLoginOrSignup && (
        <div className={style.navbar}>
          <div className={style.logo}>
            <Link to="/home" style={{ font: '28px Poppins, sans-serif' }}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={style.search}>
            <input
              type="search"
              placeholder="Buscar cancha por nombre"
              onChange={handleSearchChange}
            />
          </div>
          <div className={style.text}>
            <div className={style.texto}>
              <h1 className={style.verde}>NO TE QUEDES SIN JUGAR</h1>
              <h1 className={style.blanco}>
                ENCUENTRA LA CANCHA MÁS CERCANA A TI
              </h1>
            </div>
          </div>
          <div className={style.canchaButton}>
            <Link to="/form">
              <button className={style.btn}>Agregar Cancha</button>
            </Link>
          </div>
          <div className={style.profileButton}>
            <div className={style.dropdown}>
              <button className={style.btn} onClick={toggleProfileMenu}>
                Mi Perfil
              </button>
              {isProfileMenuOpen && (
                <div className={style.profileMenu}>
                  <Link to="/Profile">Información</Link>
                  <button onClick={logoutFunction}>Cerrar Sesión</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
