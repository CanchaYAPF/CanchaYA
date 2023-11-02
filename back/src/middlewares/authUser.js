const { decodeJwtToken, decodeGoogleToken } = require("../utils/decodedToken");
const { User } = require("../db");

const authAdmin = async (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  try {
    if (!bearerHeader) {
      return res.status(401).json({ message: "Acceso no autorizado" });
    }

    const token = bearerHeader.split(' ')[1];
    
    let userId = await decodeJwtToken(token);
    
    if (!userId) {
      // Si el token no se pudo decodificar con decodeJwtToken, intenta con decodeGoogleToken
      userId = await decodeGoogleToken(token);
    }

    if (!userId) {
      return res.status(401).json({ message: "Token inválido" });
    }
    
    const user = await User.findOne({
      where: {
        id: userId,
      }
    });

    if (!user) {
      return res.status(403).json({ message: "No tiene los permisos de acceso necesarios" });
    }

    // Token válido y usuario es un administrador, permitir acceso
    next();
  } catch (error) {
    console.error("Error en el middleware authAdmin:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = authAdmin;
