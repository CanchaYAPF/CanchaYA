import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { userSignup } from "../../../Redux/actions/form_actions"
import { response } from 'express'

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [userRegister, setUserRegister] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(userSignup, userRegister)
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

    const handleEmailChange = (e) => {
        setUserRegister({
            ...userRegister,
            email: e.target.value,
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
                    <input label="Nombre Completo" value={userRegister.name} onChange={handleNameChange} />
                </div>
                <div>
                    <input label="Correo Electronico" value={userRegister.email} onChange={handleEmailChange} />
                </div>
                <div>
                    <input label="Contraseña" value={userRegister.password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type='submit'>Registrar Usuario</button>
                    <button>Ya tengo un usuario</button>
                </div>
            </form>
        </>
    )
}

export default SignUp
