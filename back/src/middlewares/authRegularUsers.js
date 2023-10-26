const { decodeJwtTokenId, decodeGoogleTokenId} = require("../utils/decodedToken")//modularice el decifrado de tokens
const { User} = require("../db");

const authRegularUsers = async (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
  
    if (!bearerHeader) {
      res.status(401).json({ msg: "Acceso no autorizado" });
    } else {
      let onlyToken = bearerHeader.split(' ')[1];
      let userId = decodeJwtTokenId(onlyToken);
      userId = userId ? userId : await decodeGoogleTokenId(onlyToken);
  
      try {
        const user = await User.findOne({
          where: {
            id: userId,
          }
        });
  
        if (!user) {
          res.status(403).json({ msg: "No tiene los permisos de acceso necesarios" });
        } else {
          next();
        }
      } catch (err) {
        res.status(403).json({ msg: "No tiene los permisos de acceso necesarios" });
      }
    }
  };
module.exports ={authRegularUsers}
