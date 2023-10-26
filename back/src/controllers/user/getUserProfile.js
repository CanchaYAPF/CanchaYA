const { decodeJwtTokenId, decodeGoogleTokenId} = require("../utils/decodedToken")//modularice el decifrado de tokens
const {User} = require("../../db")

const getUserProfile =async(token)=>{
   let userId= decodeJwtTokenId(token)
   userId = userId ? userId : decodeGoogleTokenId(token)
   const userProfile= await User.findByPk(userId)
   return userProfile
}
module.exports = getUserProfile