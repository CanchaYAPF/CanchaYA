import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPw = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Obtén el token de la URL

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      // Realiza una solicitud al backend para cambiar la contraseña
      const response = await axios.post('/reset-password', {
        token: token,
        newPassword: newPassword,
      });

      setMessage('Contraseña cambiada con éxito');
      // Puedes redirigir al usuario a la página de inicio de sesión u otra página relevante aquí
      navigate('/login');
    } catch (error) {
      setMessage('Error al cambiar la contraseña');
    }
  };

  return (
    <div>
      <h2>Restablecer Contraseña</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Cambiar Contraseña</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPw;
