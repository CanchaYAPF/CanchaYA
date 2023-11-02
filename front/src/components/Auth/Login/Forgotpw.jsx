import React, { useState } from 'react';
import axios from 'axios';
import  style from './Forgotpw.module.css'; 

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      mail: email,
    };

    try {
      const response = await axios.post('https://canchasyaback.onrender.com/recovery/', data);

      if (response.status === 200) {
        alert('Solicitud de recuperación de contraseña exitosa. Verifica tu correo electrónico.');
      } else {
        alert(`Error: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div className={style.master}>
    <div className={style.container}>
      <div className={style.box}>
        <h2>Recuperación de Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Correo Electrónico:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button className={style.button} type="submit">Enviar Correo de Recuperación</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;
