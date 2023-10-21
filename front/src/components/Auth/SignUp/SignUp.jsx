import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"
import style from './signup.module.css'
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';
import  logo  from './logotipo-canchasya.png';
import {isBirthdateValid,
        isNameValid,
        isLastnameValid,
        isPasswordValid,
        isPasswordRepeated,
        isPhoneValid}
    from '../../../utils/utils'


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userRegister, setUserRegister] = useState({
        name: "",
        lastname: "",
        mail: "",
        password: "",
        repeatPassword: "",
        birthdate: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        lastname: "",
        mail: "",
        password: "",
        repeatPassword: "",
        birthdate: "",
        phone: "",
    });

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await dispatch(userSignup(userRegister))
            console.log(response.payload)
            sessionStorage.setItem('token', response.payload.token);
            navigate("/home");
            console.log("response action",response)
        } catch (error) {
            return error;
        }
    }

    const handleNameChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, name: value });

        if (!isNameValid(value)) {
            setErrors({ ...errors, name: "El nombre no debe contener números" });
        } else {
            setErrors({ ...errors, name: "" });
        }
    }

    const handleLastNameChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, lastname: value });

        if (!isLastnameValid(value)) {
            setErrors({ ...errors, lastname: "El apellido no debe contener números" });
        } else {
            setErrors({ ...errors, lastname: "" });
        }
    }

    const handleEmailChange = (e) => {
        setUserRegister({
            ...userRegister,
            mail: e.target.value,
        });
    }

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, password: value });
        const passwordErrors = [];

        if (value.length < 6) {
            passwordErrors.push("La contraseña debe contener al menos 6 caracteres.");
        }
        if (value.length > 15) {
            passwordErrors.push("La contraseña no debe contener más de 20 caracteres.");
        }
        if (!/[A-Z]/.test(value)) {
            passwordErrors.push("La contraseña debe contener al menos una letra mayúscula.");
        }
        if (!/[0-9]/.test(value)) {
            passwordErrors.push("La contraseña debe contener al menos un número.");
        }
        if (!/[^A-Za-z0-9]/.test(value)) {
            passwordErrors.push("La contraseña debe contener al menos un caracter especial.");
        }

        setErrors({ ...errors, password: passwordErrors });
    }
    
    const handlePasswordRepeatChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, repeatPassword: value });
        validatePasswordRepeat(value);
    }

    const validatePasswordRepeat = (repeatPassword) => {
        if (repeatPassword !== userRegister.password) {
            setErrors({ ...errors, repeatPassword: "Las contraseñas no coinciden" });
        } else {
            setErrors({ ...errors, repeatPassword: "" });
        }
    }

    const handleBirthdateChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, birthdate: value });

        if (!isBirthdateValid(value)) {
            setErrors({ ...errors, birthdate: "Debes ser mayor de 15 años para registrarte" });
        } else {
            setErrors({ ...errors, birthdate: "" });
        }
    }

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setUserRegister({ ...userRegister, phone: value });

        if (!isPhoneValid(value)) {
            setErrors({ ...errors, phone: "El número debe contener solo dígitos" });
        } else {
            setErrors({ ...errors, phone: "" });
        }
    }

    const validateForm = () => {
        const isValid =
            isNameValid(userRegister.name) &&
            isLastnameValid(userRegister.lastname) &&
            isPasswordValid(userRegister.password) &&
            isPasswordRepeated(userRegister.password, userRegister.repeatPassword) &&
            isBirthdateValid(userRegister.birthdate) &&
            isPhoneValid(userRegister.phone);

        if (!isValid) {
            alert("Por favor, completa correctamente todos los campos.");
        }

        return isValid;
    }

    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);


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
                    <h1 className={style.text}>Inscríbete para comenzar</h1>
                </div>
                <form onSubmit={handleRegisterSubmit}>
                    <div className={style.inputs}>
                        <label htmlFor="name">Nombre: </label>
                        <input
                            placeholder="Nombre"                        
                            id="name"
                            name="name"
                            value={userRegister.name}
                            onChange={handleNameChange}
                        />
                        {errors.name && <div className={style.error}>{errors.name}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="lastname">Apellidos: </label>
                        <input
                            placeholder="Apellidos"
                            id="lastname"
                            name="lastname"
                            value={userRegister.lastname}
                            onChange={handleLastNameChange}
                        />
                        {errors.lastname && <div className={style.error}>{errors.lastname}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="mail">Correo Electrónico: </label>
                        <input
                            placeholder="Correo Electrónico"
                            id="mail"
                            name="name"
                            value={userRegister.mail}
                            onChange={handleEmailChange}
                            type="email"
                        />
                        {errors.mail && <div className={style.error}>{errors.mail}</div>}
                    </div>
                    <div className={style.inputs}>
                    <label htmlFor="password">Contraseña: </label>
                    <div className={style.passwordContainer}>
                    <input
                        placeholder="Contraseña"
                        id="password"
                        name="password"
                        value={userRegister.password}
                        onChange={handlePasswordChange}
                        type={isRevealPwd ? "text" : "password"}
                    />                    
                    <img
                        src={isRevealPwd ? hidePwdImg : showPwdImg}
                        alt={isRevealPwd ? "Ocultar contraseña" : "Mostrar contraseña"}
                        onClick={() => setIsRevealPwd(!isRevealPwd)}
                        className={style.passwordIcon}
                    />
                </div>
                {errors.password.length > 0 && (
                        <div className={style.error}>
                            <ul>
                                {errors.password.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="repeatPassword">Repetir Contraseña: </label>
                        <input
                            id="repeatPassword"
                            name="repeatPassword"
                            placeholder="Repetir Contraseña"
                            value={userRegister.repeatPassword}
                            onChange={handlePasswordRepeatChange}
                            type="password"
                        />
                        {errors.repeatPassword && <div className={style.error}>{errors.repeatPassword}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="Fecha de Nacimiento">Fecha de Nacimiento: </label>
                        <input
                            placeholder="Fecha de Nacimiento"
                            value={userRegister.birthdate}
                            onChange={handleBirthdateChange}
                            type="date"
                        />
                        {errors.birthdate && <div className={style.error}>{errors.birthdate}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="phone">Teléfono: </label>
                        <input
                            id="phone"
                            name="phone"
                            placeholder="phone"
                            value={userRegister.phone}
                            onChange={handlePhoneChange}
                            type="tel"
                        />
                        {errors.phone && <div className={style.error}>{errors.phone}</div>}
                    </div>
                    <div className={style.button}>
                        <button className={style.verde} type='submit'>Registrar Usuario</button>
                        <Link to="/login"><button className={style.link}>Ya tengo un usuario</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
