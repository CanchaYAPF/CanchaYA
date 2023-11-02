const { Favorito, Field } = require("../../db");
const jwt = require("jsonwebtoken");
const mock = require("../field/getFields");
const { decodeJwtToken, decodeGoogleToken} = require("../../utils/decodedToken")

const getAllFavs = async (id) => {
 
 
  let userId= await decodeGoogleToken(id) ?await decodeGoogleToken(id) :
  await decodeJwtToken(id)
    ;

  // const tokenId=await decodeJwtToken(id)
  // let userId= tokenId ? tokenId: await decodeGoogleToken(id);


  const allFavoRelations = await Favorito.findAll({
    where: { idUser: userId },
  });

return allFavoRelations;

  
};

module.exports = getAllFavs;
