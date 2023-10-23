const { User } = require("../../db");
const jwt = require("jsonwebtoken");

const getUserProfile = async (req, res) => {
  const bearerHeader = req.headers['authorization'];
  if(!bearerHeader) {
    res.status(401).json({msg:"Acceso no autorizado"});
  } else {
    let token= bearerHeader.split(' ')[1]
    jwt.verify(token,"secretKey", async (err, decoded) => {
      if(err){
        res.status(403).json({msg:"No tiene los permisos de acceso necesarios"});
      } else {
        const user = await User.findByPk(decoded.userId);
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({msg: "Usuario no encontrado"});
        }
      }
    });
  }
};

module.exports = getUserProfile;