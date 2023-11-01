import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Resetpw() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidToken, setIsValidToken] = useState(true); // Estado para validar el token

  useEffect(() => {
    // Aquí puedes agregar código para validar el token automáticamente
    // Puedes realizar una solicitud al servidor para verificar si el token es válido.
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      // Realiza una solicitud al servidor para validar el token
      axios.get(`http://localhost:3001/validate-token?token=${token}`)
        .then((response) => {
          setIsValidToken(response.data.isValid);
        })
        .catch((error) => {
          setIsValidToken(false);
        });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprueba si el token es válido antes de permitir el restablecimiento de la contraseña
    if (isValidToken) {
      // Realiza una solicitud al servidor para cambiar la contraseña
      axios.post('http://localhost:3001/reset-password', { newPassword: password, token: token })
        .then((response) => {
          alert(response.data.message);
          // Redirige al usuario a la página de inicio de sesión u otra página relevante
        })
        .catch((error) => {
          console.error('Error al restablecer la contraseña:', error);
          alert('Error al restablecer la contraseña.');
        });
    } else {
      alert('El token no es válido. No se puede restablecer la contraseña.');
    }
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      {isValidToken ? (
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
      ) : (
        <p>El token no es válido. No se puede restablecer la contraseña.</p>
      )}
    </div>
  );
}

export default Resetpw;
