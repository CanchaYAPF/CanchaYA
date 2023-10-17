import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"
import style from './signup.module.css'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userRegister, setUserRegister] = useState({
        name: "",
        lastname: "",
        mail: "",
        password: "",
    })

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log();
            const response = await dispatch(userSignup(userRegister))
            const token = response.payload.token
            sessionStorage.setItem('token', token);
            navigate("/home")
        } catch (error) {
            return error
        }
    }
    const handleNameChange = (e) => {
        setUserRegister({
            ...userRegister,
            name: e.target.value,
        })
    }

    const handleLastNameChange = (e) => {
        setUserRegister({
            ...userRegister,
            lastname: e.target.value,
        })
    }

    const handleEmailChange = (e) => {
        setUserRegister({
            ...userRegister,
            mail: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setUserRegister({
            ...userRegister,
            password: e.target.value,
        })
    }

    return (
        <>
        <div className={style.master}>
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
                    <input placeholder="Nombre" value={userRegister.name} onChange={handleNameChange} />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Apellidos">Apellidos: </label>
                    <input placeholder="Apellidos" value={userRegister.lastname} onChange={handleLastNameChange} />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Correo Electronico">Correo Electronico: </label>
                    <input placeholder="Correo Electronico" value={userRegister.mail} onChange={handleEmailChange} type="email" />
                </div>
                <div className={style.inputs}>
                <label htmlFor="Contraseña">Contraseña: </label>
                    <input placeholder="Contraseña" value={userRegister.password} onChange={handlePasswordChange} type="password" />
                </div>
                <div className={style.button}>
                    <button className={style.verde} type='submit'>Registrar Usuario</button>
                    <Link to="/login"><button className={style.link}>Ya tengo un usuario</button></Link>
                </div>
            </form>
                </div>
        </div>
        </>
    
    )
}

export default SignUp