const jwt = require('jsonwebtoken');
const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const resetPassword = async (req, res) => {
const encryptPassword = await bcrypt.hash(req.body.newPassword.toString(), 10);
  try {
    const decodedToken = jwt.verify(req.body.token, 'secretKey');
    
    User.update(
      {
        password: encryptPassword,
      },
      {
        where: {
          mail: decodedToken.mail,
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

