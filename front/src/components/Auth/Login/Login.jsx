import React from 'react'
import { useState, useEffect } from 'react'
import { userLogin } from '../../../Redux/actions/form_actions'
import { useDispatch } from "react-redux"
import { Link,useNavigate } from 'react-router-dom'
import style from './login.module.css'


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
      const token = response.payload.token
      sessionStorage.setItem('token', token);
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
  return (
    <div className={style.master}>
      <div className={style.logo}>
        <h1>Canchas Ya</h1>
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
      <form onSubmit={handleLoginSubmit}>
        <div className={style.inputs}>
        <label htmlFor="E-mail">E-mail: </label>
          <input placeholder="Escribí tu e-mail" onChange={handleEmailChange} value={usernameLogin.mail} />
        </div>
        <div className={style.inputs}>
        <label htmlFor="Contraseña">Contraseña: </label>
          <input placeholder="Escribí tu contraseña" onChange={handlePasswordChange} value={usernameLogin.password} type='password'/>
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