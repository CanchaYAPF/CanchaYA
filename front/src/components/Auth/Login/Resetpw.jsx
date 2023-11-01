import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Resetpw() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
 
  const handleSubmit = (e) => {
    e.preventDefault();

      axios.post('http://localhost:3001/recovery/reset-password', { newPassword: password, token: token })
        .then((response) => {
          alert(response.data.message);
          
        })
        .catch((error) => {
          console.error('Error al restablecer la contraseña:', error);
          alert('Error al restablecer la contraseña.');
        });
    };


  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      
        <form onSubmit={handleSubmit}>
          <label>
            Nueva Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            Confirmar Contraseña:
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <button type="submit">Restablecer Contraseña</button>
        </form>
     
    </div>
  );
}

export default Resetpw;
