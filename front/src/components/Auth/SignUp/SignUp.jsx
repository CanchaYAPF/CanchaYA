import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"
import style from './signup.module.css'
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg';

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
            sessionStorage.setItem('token', response.payload.token);
            navigate("/home");
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

    const isNameValid = (name) => {
        return /^[A-Za-z]+$/.test(name);
    };

    const isLastnameValid = (lastname) => {
        return /^[A-Za-z]+$/.test(lastname);
    };

    const isPasswordValid = (password) => {
        return password.length >= 6 &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[^A-Za-z0-9]/.test(password);
    };

    const isPasswordRepeated = (password, repeatPassword) => {
        return password === repeatPassword;
    };

    const isBirthdateValid = (birthdate) => {
    };

    const isPhoneValid = (phone) => {
        return /^[0-9]+$/.test(phone);
    };
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);


    return (
        <div className={style.master}>
            <div className={style.logo}>
                <h1>Canchas Ya</h1>
            </div>
            <div className={style.container}>
                <div className={style.sesion}>
                    <h1 className={style.text}>Inscríbete para comenzar</h1>
                </div>
                <form onSubmit={handleRegisterSubmit}>
                    <div className={style.inputs}>
                        <label htmlFor="Nombre">Nombre: </label>
                        <input
                            placeholder="Nombre"
                            value={userRegister.name}
                            onChange={handleNameChange}
                        />
                        {errors.name && <div className={style.error}>{errors.name}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="Apellidos">Apellidos: </label>
                        <input
                            placeholder="Apellidos"
                            value={userRegister.lastname}
                            onChange={handleLastNameChange}
                        />
                        {errors.lastname && <div className={style.error}>{errors.lastname}</div>}
                    </div>
                    <div className={style.inputs}>
                        <label htmlFor="Correo Electronico">Correo Electrónico: </label>
                        <input
                            placeholder="Correo Electrónico"
                            value={userRegister.mail}
                            onChange={handleEmailChange}
                            type="email"
                        />
                        {errors.mail && <div className={style.error}>{errors.mail}</div>}
                    </div>
                    <div className={style.inputs}>
                    <label htmlFor="Contraseña">Contraseña: </label>
                    <div className={style.passwordContainer}>
                    <input
                        placeholder="Contraseña"
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
                        <label htmlFor="Repetir Contraseña">Repetir Contraseña: </label>
                        <input
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
                        <label htmlFor="Teléfono">Teléfono: </label>
                        <input
                            placeholder="Teléfono"
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
