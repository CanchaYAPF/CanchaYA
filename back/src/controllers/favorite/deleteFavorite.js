const { where } = require("sequelize");
const { Favorito, Sport } = require("../../db");
const jwt = require("jsonwebtoken")
const { decodeJwtToken, decodeGoogleToken} = require("../../utils/decodedToken")

const deleteFav = async (token,idsFields) => {


  let userId= await decodeGoogleToken(token) ?await decodeGoogleToken(token) :
  await decodeJwtToken(token)
    ;
  

  // const tokenId=await decodeJwtToken(token)
  // let userId= tokenId ? tokenId: await decodeGoogleToken(token);


  const allFavoRelations =  await Favorito.findAll({where:{idUser : userId},})

  const fieldToDelete = await allFavoRelations.filter(f=> f.idsFields === idsFields)
 const id = fieldToDelete[0]

   console.log(id)
 

   const favoriteDel = await Favorito.destroy({
    where: {
      id: id.id
    },
  });

   

  
  return favoriteDel;
};

module.exports = deleteFav;
