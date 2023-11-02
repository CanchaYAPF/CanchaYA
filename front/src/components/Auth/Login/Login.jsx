import { useState, useRef } from 'react'
import { userLogin } from '../../../Redux/actions/form_actions'
import { useDispatch } from "react-redux"
import { Link,useNavigate } from 'react-router-dom'
import style from './login.module.css'
import logo  from './logotipo-canchasya.png';
import axios from 'axios'
import { GoogleLogin } from '@react-oauth/google';
import showPwdImg from '../SignUp/show-password.svg';
import hidePwdImg from '../SignUp/hide-password.svg';
import {getUserRole} from '../../../Redux/actions/admin_actions'
import imagen from './canchas-ya-imgane23.png';



const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [usernameLogin, setUserLogin] = useState({
    mail: "",
    password: ""
  })
  const [error, setError] = useState(null)  //manejo de errores

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(userLogin(usernameLogin));
      await sessionStorage.setItem('token', response.payload.token);
      dispatch(getUserRole(response.payload.token));
      navigate("/home");
    } catch (error) {
      if (error.response) {
        // Si el error tiene una respuesta del servidor
        if (error.response.status === 404) {
          setError("El usuario no está registrado. Por favor, verifica tu correo electrónico.");
        } else if (error.response.status === 401) {
          setError("Contraseña incorrecta. Inténtalo de nuevo.");
        } else if (error.response.status === 403) {
          setError("El usuario se encuentra desactivado. Por favor, contacta al soporte técnico.");
        } else {
          setError("Error desconocido. Por favor, inténtalo de nuevo más tarde.");
        }
      } else {
        setError("Error desconocido. Por favor, inténtalo de nuevo más tarde.");
      }
      console.error("Error al iniciar sesión:", error);
    }
  };
  const handleEmailChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      mail: e.target.value,
    })
  }
  
  const handlePasswordChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      password: e.target.value
    })
  }
  ///GoogleSignup:

  const credentialResponse = async (credentialResponse) =>{
    try {
        await axios.post(`http://localhost:3001/user/googleLogin`, { token: credentialResponse.credential });
        await sessionStorage.setItem('googleToken', credentialResponse.credential);
        dispatch(getUserRole(credentialResponse.credential))
        navigate("/home");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    } 
 }
 const [isRevealPwd, setIsRevealPwd] = useState(false); 

  return (
    <div className={style.master} style={{ backgroundImage: `url(${imagen})` }}>  
          <div className={style.logo}>
        <h1><img src={logo} alt="" /></h1>
      </div>
      <div className={style.texto}>
      <h1 className={style.top}>ENCUENTRA, RESERVA Y JUEGA</h1>
      <h1 className={style.blanco}>LA CANCHA IDEAL A SOLO UN CLIC DE DISTANCIA</h1>
      <h3 className={style.blanco}>Descubre la forma más sencilla y rápida de reservar canchas deportivas. En 
      <span className={style.resaltado}> CanchasYA</span> </h3>
      <h2 className={style.blanco}> Ponemos el deporte al alcance de tus manos</h2>
      <h2 className={style.blanco}> Encuentra, reserva y juega en las mejores instalaciones en segundos</h2>
      <h2 className={style.blanco}> Tu cancha perfecta, tu juego perfecto. ¡Únete a la comunidad deportiva ahora!</h2>
      <h2 className={style.resaltado}> Para ingresar es necesario crear un usuario </h2>      
      </div>
      <br />
      <div className={style.container}>
      <div className={style.sesion}>
      <h1 className={style.text}>Inicia Sesión</h1>
      </div>
      <div className={style.google}>
        <GoogleLogin onSuccess={credentialResponse}/>
      </div>
      <form onSubmit={handleLoginSubmit}>
        <div className={style.inputs}>
        <label htmlFor="mail">E-mail: </label>
          <input placeholder="Escribí tu e-mail" onChange={handleEmailChange} value={usernameLogin.mail} name="mail" id="mail" type="email" />
        </div>
        <div className={style.inputs}>
        <label htmlFor="password">Contraseña: </label>
          <input placeholder="Escribí tu contraseña"
            onChange={handlePasswordChange} 
            value={usernameLogin.password} 
            id="password" 
            name="password" 
            type={isRevealPwd ? "text" : "password"}
                    />                    
                    <img
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        alt={isRevealPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                        onClick={() => setIsRevealPwd(!isRevealPwd)}
                        className={style.passwordIcon}
                    />
          <div className={style.forgotPasswordLink}>
          <Link to= "/forgot-password">
          <button className={style.link}> Olvidé mi contraseña </button>
          
          </Link>
          </div>
        </div>
        <div className={style.button}>
        <button className={style.verde} type="submit">Iniciar Sesion</button>  
        
        <Link to="/signup">
          <button className={style.link}>No tengo una cuenta</button>
        </Link>
        {error && <p className={style.error}>{error}</p>} 
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login