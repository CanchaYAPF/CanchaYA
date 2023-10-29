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


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [usernameLogin, setUserLogin] = useState({
    mail: "",
    password: ""
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(userLogin(usernameLogin))
      sessionStorage.setItem('token', response.payload.token);
      console.log(response.payload.token)
      navigate("/home")
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
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
        await axios.post(`http://localhost:3001/user/googleLogin`, { token: credentialResponse.credential })
        sessionStorage.setItem('googleToken', credentialResponse.credential);
        console.log(credentialResponse.credential)
        navigate("/home");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    } 
 }
 const [isRevealPwd, setIsRevealPwd] = useState(false);
 const [showModal, setShowModal] = useState(false);
 const emailRef = useRef('');

 const toggleModal = () => {
  setShowModal(!showModal);
};

const handleForgotPasswordClick = () => {
  toggleModal();
};

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }

    try {
      // Enviar una solicitud al servidor para iniciar el proceso de recuperación de contraseña.
      const response = await axios.post('ruta_del_servicio_de_recuperacion_de_contrasena', {
        email: email,
      });

      alert('Se ha enviado un enlace de recuperación de contraseña a su correo electrónico.');
      toggleModal();
    } catch (error) {
      console.error('Error al enviar el correo de recuperación de contraseña:', error);
      alert('Error al enviar el correo de recuperación de contraseña.');
    }
  };
 

  return (
    <div className={style.master}>
      <div className={style.logo}>
        <h1><img src={logo} alt="" /></h1>
      </div>
      <div className={style.texto}>
      <h1 className={style.top}>ENCUENTRA, RESERVA Y JUEGA:</h1>
      <h1 className={style.blanco}>LA CANCHA IDEAL A SOLO UN CLIC DE DISTANCIA</h1>
      <h3 className={style.blanco}>Descubre la forma más sencilla y rápida de reservar canchas deportivas. En <span className={style.resaltado}>CANCHAS YA</span> ponemos el deporte al alcance de tus manos . Encuentra, reserva y juega en las mejores instalaciones en segundos. Tu cancha perfecta, tu juego perfecto. ¡Únete a la comunidad deportiva ahora!</h3>
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
          <button className={style.link} onClick={handleForgotPasswordClick}>
        Olvidé mi contraseña
      </button>

      {showModal && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h2>Recuperar Contraseña</h2>
            <form onSubmit={handleForgotPasswordSubmit}>
              <label htmlFor="forgotEmail">E-mail: </label>
              <input
                placeholder="Escribí tu e-mail"
                ref={emailRef}
                id="forgotEmail"
                type="email"
              />
              <button type="submit">Enviar correo de recuperación</button>
            </form>
            <button onClick={toggleModal}>Cerrar</button>
          </div>
        </div>
      )}
          </div>
        </div>
        <div className={style.button}>
        <button className={style.verde} type="submit">Iniciar Sesion</button>  
        
        <Link to="/signup">
          <button className={style.link}>No tengo una cuenta</button>
        </Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login