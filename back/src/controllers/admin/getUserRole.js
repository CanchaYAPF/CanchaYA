const {decodeGoogleToken,decodeJwtToken} = require("../../utils/decodedToken")

const getUserRole = async (token)=>{
  const user = decodeJwtToken(token)
  if(user){
    return user.roles
  }else if(decodeGoogleToken(token)){
    const googleUser=decodeGoogleToken(token)
    return googleUser.roles
  }else{
    throw new Error("No se encontro usuario")
  }
}
module.exports=getUserRole