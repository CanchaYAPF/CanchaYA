const { User } = require("../../db");
const { decodeJwtToken, decodeGoogleToken } = require("../../utils/decodedToken");

const getUserProfile = async (req, res) => {
  const bearerHeader = req.headers['authorization'];
  try {
    if (!bearerHeader) {
      return res.status(401).json({ msg: "Acceso no autorizado" });
    }
    const token = bearerHeader.split(' ')[1];
    let userId = await decodeJwtToken(token);
    if (!userId) {
      // Si el token no se pudo decodificar con decodeJwtToken, intenta con decodeGoogleToken
      userId = await decodeGoogleToken(token);
    }
    if (!userId) {
      return res.status(401).json({ msg: "Token inválido" });
    }
    const user = await User.findOne({
      where: {
        id: userId,
      }
    });
    if (user) {
      res.json(user);
    } 
  }catch (error) {

    return res.status(404).json({msg: "Usuario no encontrado"});;
  }
  // if(!bearerHeader) {
  //   res.status(401).json({msg:"Acceso no autorizado"});
  // } else {
  //   let token= bearerHeader.split(' ')[1]
  //   jwt.verify(token,"secretKey", async (err, decoded) => {
  //     if(err){
  //       res.status(403).json({msg:"No tiene los permisos de acceso necesarios"});
  //     } else {
  //       const user = await User.findByPk(decoded.userId);
  //       if (user) {
  //         res.json(user);
  //       } else {
  //         res.status(404).json({msg: "Usuario no encontrado"});
  //       }
  //     }
  //   });
  // }
};

module.exports = getUserProfile;