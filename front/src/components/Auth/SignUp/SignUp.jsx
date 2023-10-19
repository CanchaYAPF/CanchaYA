import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"
import style from './signup.module.css'
import GoogleSignUp from '../GoogleSingUp/googleSingUp'


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const googleId="889605891641-navvi2j6f5q2p56v1nojfo9qi0vugusj.apps.googleusercontent.com"
  
    const [userRegister, setUserRegister] = useState({
        name: "",
        lastname: "",
        mail: "",
        password: "",
    })

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(userSignup(userRegister))
            sessionStorage.setItem('token',response.payload.token);
            navigate("/home")
        } catch (error) {
            return error
        }
    }
    const handleInputChange = (e) => {
        setUserRegister({
            ...userRegister,
            [e.target.name]: e.target.value,
        })
    }
  

    return (
        <>
        <div className={style.master}>
        <iframe src="http://localhost:5173/signup" sandbox="allow-same-origin allow-popups allow-forms"></iframe>
      <div className={style.logo}>
      <h1>Canchas Ya</h1>
      </div>
      <div className={style.texto}>
      <h1 className={style.top}>ENCUENTRA, RESERVA Y JUEGA:</h1>
      <h1 className={style.blanco}>LA CANCHA IDEAL A SOLO UN CLIC DE DISTANCIA</h1>
      <h3 className={style.blanco}>Descubre la forma más sencilla y rápida de reservar canchas deportivas. En <span className={style.resaltado}>CANCHAS YA</span> ponemos el deporte al alcance de tus manos . Encuentra, reserva y juega en las mejores instalaciones en segundos. Tu cancha perfecta, tu juego perfecto. ¡Únete a la comunidad deportiva ahora!</h3>
      </div>
      <div className={style.container}>
      <div className={style.sesion}>
      <h1 className={style.text}>Inscribete para comenzar</h1>
      </div>
            <form onSubmit={handleRegisterSubmit}>
                <div className={style.inputs}>
                <label htmlFor="Nombre">Nombre: </label>
                    <input placeholder="Nombre" id="name" name="name" value={userRegister.name} onChange={handleInputChange} type="text" />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Apellidos">Apellidos: </label>
                    <input placeholder="Apellidos" id="lastname" name="lastname" value={userRegister.lastname} onChange={handleInputChange} type="text" />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Correo Electronico">Correo Electronico: </label>
                    <input placeholder="Correo Electronico" id="mail" name="mail" value={userRegister.mail} onChange={handleInputChange} type="email" />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Contraseña">Contraseña: </label>
                    <input placeholder="Contraseña" id="password" name="password" value={userRegister.password} onChange={handleInputChange} type="password" />
                </div>
                <div className={style.button}>
                    <button className={style.verde} type='submit'>Registrar Usuario</button>
                    <GoogleSignUp clientId={googleId} buttonText="Iniciar sesión con Google"/>
                    <Link to="/login"><button className={style.link}>Ya tengo un usuario</button></Link>
                </div>
            </form>
                </div>
        </div>
        </>
    
    )
}

export default SignUp