import React, { useState } from 'react';

function Resetpw() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Falta agregar el Post
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
          Token de Recuperación:
          <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
        </label>
        <button type="submit">Restablecer Contraseña</button>
      </form>
    </div>
  );
}

export default Resetpw;
