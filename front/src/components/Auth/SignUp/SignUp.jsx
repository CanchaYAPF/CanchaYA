import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"

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
            <form onSubmit={handleRegisterSubmit}>
                <div>
                    <input placeholder="Nombre" value={userRegister.name} onChange={handleNameChange} />
                </div>
                <div>
                    <input placeholder="Apellidos" value={userRegister.lastname} onChange={handleLastNameChange} />
                </div>
                <div>
                    <input placeholder="Correo Electronico" value={userRegister.mail} onChange={handleEmailChange} type="email" />
                </div>
                <div>
                    <input placeholder="Contraseña" value={userRegister.password} onChange={handlePasswordChange} type="password" />
                </div>
                <div>
                    <button type='submit'>Registrar Usuario</button>
                    <Link to="/login"><button>Ya tengo un usuario</button></Link>
                </div>
            </form>
        </>
    )
}

export default SignUp