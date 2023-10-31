const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const { User } = require("../../db");

const resetPassword = (req, res) => {
  const { token, newPassword } = req.body;

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ error: 'Token de recuperación no válido' });
    }

    const email = decoded.mail;

    User.update(
      {
        password: newPassword,
      },
      {
        where: {
          mail: email,
        },
      }
    )
      .then(() => {
        return res.status(200).json({ message: 'Contraseña restablecida con éxito' });
      })
      .catch((error) => {
        console.error('Error al cambiar la contraseña en la base de datos:', error);
        return res.status(500).json({ error: 'Error al cambiar la contraseña en la base de datos' });
      });
  });
};

module.exports = { resetPassword };
