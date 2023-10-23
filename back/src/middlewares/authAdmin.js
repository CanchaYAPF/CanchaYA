const { decodeJwtToken, decodeGoogleToken} = require("../utils/decodedToken")//modularice el decifrado de tokens
const { User} = require("../db");
const authAdmin = async (req,res,next)=>{
    const bearerHeader = req.headers['authorization'];

    if(!bearerHeader){
        res.status(401).json({msg:"Acceso no autorizado"})
    }else{
      let token= bearerHeader.split(' ')[1]
      let idUser= decodeJwtToken(token)
      idUser = idUser ? idUser : decodeGoogleToken(token)
      const adminUser= await User.findOne({
        where:{
            id:idUser,
            roles:"admin"
        }
      })
      if(adminUser){
        next()
      }else{
        res.status(403).json({msg:"No tiene los permisos de acceso necesarios"});
      }
    }
}
module.exports= authAdmin