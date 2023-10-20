const { Favorito, Sport } = require("../../db");
const jwt = require("jsonwebtoken")

const postFavorite = async (token,idsFields) => {
  // const existingField = await Favorite.findOne({ where: { name } });
  // if (existingField) {
  //   const error = new Error("La cancha ya existe");
  //   error.status = 409;
  //   throw error;
  // }


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
