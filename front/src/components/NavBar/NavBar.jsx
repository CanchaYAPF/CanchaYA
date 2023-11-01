/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import style from './Navbar.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import logo from './logotipo-canchasya.png';
import SearchContext from '../../SearchContext';
import { getUserRole, clearUserRole } from '../../Redux/actions/admin_actions';


const NavBar = () => {

  //validacion de role Admin
  const tokenJwt = sessionStorage.getItem('token');
  const googleToken= sessionStorage.getItem('googleToken')
  const token= tokenJwt ? tokenJwt : googleToken
  const dispatch = useDispatch()
  const userRole = useSelector(state=>state.role)
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(()=>{
    console.log("entra a useEffect")
    if(userRole.length===0){
   dispatch(getUserRole(token)).finally(() => setIsLoading(false))}
   console.log("userole:", userRole)
  },[dispatch])


  const location = useLocation();
  const navigate = useNavigate(); 

  const isHomePage = location.pathname === '/home';
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const logoutFunction = async () => {
    sessionStorage.removeItem('token');
    dispatch(clearUserRole())
    navigate('/login');

  };

  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup';


  const { setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={style.navbar}>
      {!isLoginOrSignup && (
        <div className={style.logo}>
          <Link to="/home" style={{ font: '28px Poppins, sans-serif' }}>
            <img src={logo} alt="" />
          </Link>
        </div>
      )}
      {!isLoginOrSignup && isHomePage && (
        <div className={style.search}>
          <input
            type="search"
            placeholder="Buscar cancha por nombre"
            onChange={handleSearchChange}
          />
        </div>
      )}

  {!isLoginOrSignup && (
    <div className={style.text}>
      <div className={style.texto}>
        <h1 className={style.verde}>NO TE QUEDES SIN JUGAR</h1>
        <h1 className={style.blanco}>
          ENCUENTRA LA CANCHA MÁS CERCANA A TI
        </h1>
      </div>
    </div>
  )}
  {!isLoginOrSignup && !isHomePage && (
    <div className={style.text2}>
      <div className={style.texto}>
        <h1 className={style.verde}>NO TE QUEDES SIN JUGAR</h1>
        <h1 className={style.blanco}>
          ENCUENTRA LA CANCHA MÁS CERCANA A TI
        </h1>
      </div>
    </div>
  )}
  {!isLoginOrSignup && (
    <div className={style.canchaButton}>
      <Link to="/form">
        <button className={style.btn}>Agregar Cancha</button>
      </Link>
    </div>
  )}
  {!isLoginOrSignup && (
    <div className={style.profileButton}>
      <div className={style.dropdown}>
        <button className={style.btn} onClick={toggleProfileMenu}>
          Mi Perfil
        </button>
        {isProfileMenuOpen && (
          <div className={style.profileMenu}>
            <Link to="/Profile" className={style.link}>
              Información
            </Link>
            {!isLoading && userRole==="admin" && (<div>
              <Link to="/Administracion">Admin</Link>
            </div>)}
           
            <button onClick={logoutFunction} className={style.button}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
  )}
</div>

  );
};

export default NavBar;