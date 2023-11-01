const jwt = require('jsonwebtoken');

const authResetPassword = (req, res, next) => {
  const {token} = req.query;

  try {
    if (!token) {
      return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
    }
    const decodedToken = jwt.verify(token, 'secretKey');
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

    
    //   jwt.verify(token, 'secretKey', (err, decoded) => {
    //     if (err.name==='TokenExpiredError') {
    //       return res.status(403).json({ error: 'El token ha expirado.' });
    //     }
    //     console.log("decoded",decoded)
    
   
    //     next();
    //   });
    // };
