const {decodeJwtTokenRole,decodeGoogleTokenRole} = require("../../utils/decodedToken")

const getUserRole = async (token)=>{
  const user = decodeJwtTokenRole(token)
  if(user){
    return user
  }else if(decodeGoogleTokenRole(token)){
    const googleUser=decodeGoogleTokenRole(token)
    return googleUser
  }else{
    throw new Error("No se encontro usuario")
  }
}
module.exports=getUserRole