const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;
const { User } = require("../../db");
const { decodeJwtTokenEmail } = require("../../utils/decodedToken");

const resetPassword = (req, res) => {
  const { newPassword } = req.body.newPassword;
  const {token}= req.body.token;
  console.log('es este burro', req.body);

  try {
    const email = decodeJwtTokenEmail(token);
    console.log(email);
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
  } catch (err) {
    console.error('Error al decodificar el token JWT:', err);
    return res.status(400).json({ error: 'Problemas para decodificar el mail del Token' });
  }
};

module.exports = { resetPassword };

