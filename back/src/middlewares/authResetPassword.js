const jwt = require('jsonwebtoken');

const authResetPassword = (req, res, next) => {
  try {
    if (!req.body.token) {
      return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
    }
    const decodedToken = jwt.verify(req.body.token, 'secretKey');
    console.log("decodedToken:", decodedToken)
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(403).json({ error: 'El token ha expirado.' });
    } else {
      return res.status(403).json({ error: 'Error al verificar el token' });
    }
  }
};

module.exports = authResetPassword;
