const { Favorito, Sport } = require("../../db");
const jwt = require("jsonwebtoken")

const postFavorite = async (token,idsFields) => {
  

  const decoded = jwt.verify(token, 'secretKey');
  console.log("decode",decoded.userId)
  const userId = decoded.userId





  

  

  const newFavorite = await Favorito.create({
    idUser: userId,
    idsFields,
   
  });

  

  
  return newFavorite;
};

module.exports = postFavorite;
