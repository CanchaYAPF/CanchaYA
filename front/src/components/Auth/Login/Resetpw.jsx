import React, { useState } from 'react';
import axios from 'axios';
import style from './Resetpw.module.css';
import hidePwdImg from '../SignUp/hide-password.svg';
import showPwdImg from '../SignUp/show-password.svg';

function Resetpw() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de contraseña antes de enviarla al servidor
    if (passwordErrors.length === 0 && !confirmPasswordError) {
      axios
        .post('http://localhost:3001/recovery/reset-password', {
          newPassword: password,
          token: token,
        })
        .then((response) => {
          setPasswordChanged(true); 
          alert(response.data.message);         
        })
        .catch((error) => {
          console.error('Error al restablecer la contraseña:', error);
          alert('Error al restablecer la contraseña.');
        });
    } else {
      alert('Por favor, corrija los errores en la contraseña y la confirmación.');
    }
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);

    const passwordErrors = [];

    if (value.length < 6) {
      passwordErrors.push("La contraseña debe contener al menos 6 caracteres.");
    }
    if (value.length > 15) {
      passwordErrors.push("La contraseña no debe contener más de 15 caracteres.");
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

    setPasswordErrors(passwordErrors);
  };

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    validatePasswordRepeat(value);
  };

  const validatePasswordRepeat = (repeatPassword) => {
    if (repeatPassword !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden");
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <div className={style.resetPassword}>
      <h2>Restablecer Contraseña</h2>

      <form onSubmit={handleSubmit} className={style.box}> 
        <div className={style.inputs}>
          <label htmlFor="password">Nueva Contraseña:</label>
          <div className={style.passwordContainer}>
            <input
              placeholder="Nueva Contraseña"
              id="password"
              name="password"
              value={password}
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
          {passwordErrors.map((error, index) => (
  <div key={index} className={style.error}>
    {error}
  </div>
))}
        </div>
        <div className={style.inputs}>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            type="password"
          />
          {confirmPasswordError && (
            <div className={style.error}>{confirmPasswordError}</div>
          )}
        </div>
        <button type="submit">Restablecer Contraseña</button>
      </form>
    </div>
  );
}

export default Resetpw;
