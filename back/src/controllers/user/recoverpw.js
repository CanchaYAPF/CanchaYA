const jwt = require('jsonwebtoken');
const sgMail = require('./sendgridConfig');
const { JWT_SECRET } = process.env;
const { User } = require("../../db");

const checkIfEmailExists = async (email) => {
  return await User.findOne({
    where: {
      mail: email,
    },
  })
    .then((user) => {
      return !!user;
    })
    .catch((error) => {
      throw error;
    });
};

const requestPasswordRecovery = async (req, res) => {
  const { mail } = req.body;
  console.log(await checkIfEmailExists(mail))
  await checkIfEmailExists(mail)
    .then((emailExists) => {
      if (!emailExists) {
        return res.status(404).json({ error: 'Correo electrónico no encontrado' });
      }

      // Genera un token de recuperación único que incluye la dirección de correo electrónico.
      const token = jwt.sign({ mail }, 'secretKey', { expiresIn: '1h' });

      // Crea un enlace de recuperación que incluye el token.
      const recoveryLink = `https://cancha-ya-git-pre-develop-canchayas-projects.vercel.app/reset-password?token=${token}`;

      // Envia un correo electrónico al usuario con el enlace de recuperación.
      const msg = {
        to: mail,
        from: 'canchasya1@gmail.com',
        subject: 'Recuperación de contraseña',
        text: 'Siga este enlace para restablecer su contraseña',
        html: `<a href="${recoveryLink}">Haga clic aquí para restablecer su contraseña</a>`,
      };

      sgMail.send(msg)
        .then(() => {
          return res.status(200).json({ message: 'Correo de recuperación de contraseña enviado con éxito' });
        })
        .catch((error) => {
          console.error('Error al enviar el correo de recuperación de contraseña:', error);
          return res.status(500).json({ error: 'Error al enviar el correo de recuperación de contraseña' });
        });
    })
    .catch((error) => {
      console.error('Error al verificar la existencia del correo electrónico:', error);
      return res.status(500).json({ error: 'Error al verificar la existencia del correo electrónico' });
    });
};

module.exports = { requestPasswordRecovery };
