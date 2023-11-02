const { Favorito, Sport } = require("../../db");
const jwt = require("jsonwebtoken")
const { decodeJwtToken, decodeGoogleToken} = require("../../utils/decodedToken")



const postFavorite = async (token,idsFields) => {


 
// const longitudToken = tokenString.length > 500 ? "google" : "jwt"




//   let userId= longitudToken ===  "google" ?await decodeGoogleToken(token) :
//   await decodeJwtToken(token)
//     ;




const tokenId=await decodeJwtToken(token)
let userId= tokenId ? tokenId: await decodeGoogleToken(token);

  

  const newFavorite = await Favorito.create({
    idUser: userId,
    idsFields,
   
  });

  

  
  return newFavorite;
};

module.exports = postFavorite;
