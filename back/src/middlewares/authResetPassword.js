const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const authResetPassword = (req, res, next) => {
console.log('token del mw', req.body.token);
  try {
    if (!req.body.token) {
      console.log('estes el el del if', req.body.token);
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

    
    //   jwt.verify(req.body.token, 'secretKey', (err, decoded) => {
    //     if (err.name==='TokenExpiredError') {
    //       return res.status(403).json({ error: 'El req.body.token ha expirado.' });
    //     }
    //     console.log("decoded",decoded)
    
   
    //     next();
    //   });
    // };
