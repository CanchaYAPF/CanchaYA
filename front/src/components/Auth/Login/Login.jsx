import React from 'react'
import { useState } from 'react'
import { userLogin } from '../../../Redux/actions/form_actions'
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const [usernameLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(userLogin(usernameLogin))
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
  const handleEmailChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      email: e.target.value,
    })
  }
  
  const handlePasswordChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      password: e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input label="email" onChange={handleEmailChange} value={usernameLogin.email} />
        </div>
        <div>
          <input label="password" onChange={handlePasswordChange} value={usernameLogin.password} />
        </div>
        <button type="submit">Iniciar Sesion</button>
        <Link to="/signup">
          <button>Registrarme</button>
        </Link>
      </form>
    </div>
  )
}

export default Login