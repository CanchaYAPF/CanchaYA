import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { userLogin } from '../../../Redux/actions/form_actions';
import style from './login.module.css';
import axios from "axios"
import GoogleSignUp from "../GoogleSingUp/googleSingUp"

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
      navigate("/home")
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
    const handleInputChange = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        })
    }

  //Google:
  const googleId = "889605891641-navvi2j6f5q2p56v1nojfo9qi0vugusj.apps.googleusercontent.com";

  const responseGoogle = async (response) => {
    console.log(response);
    try {
      await axios.post(`http://localhost:3001/user/googleSingup`, { token: response.tokenId });
      sessionStorage.setItem('token', response.tokenId);
      navigate("/home");
    } catch (error) {
      return error;
    }
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
          <input placeholder="Escribí tu e-mail" onChange={handleInputChange} value={usernameLogin.mail} id="name" name="name" type="text" />
        </div>
        <div className={style.inputs}>
        <label htmlFor="Contraseña">Contraseña: </label>
          <input placeholder="Escribí tu contraseña" onChange={handleInputChange} value={usernameLogin.password} id="password" name="password" type='password'/>
        </div>
        <div className={style.button}>
        <button className={style.verde} type="submit">Iniciar Sesion</button>
        <GoogleSignUp 
                    clientId={googleId} 
                    buttonText="Iniciar sesión con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    />
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