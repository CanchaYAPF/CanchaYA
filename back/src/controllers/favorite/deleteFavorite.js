const { where } = require("sequelize");
const { Favorito, Sport } = require("../../db");
const jwt = require("jsonwebtoken")

const deleteFav = async (token,idsFields) => {
  // const existingField = await Favorite.findOne({ where: { name } });
  // if (existingField) {
  //   const error = new Error("La cancha ya existe");
  //   error.status = 409;
  //   throw error;
  // }


  const decoded = jwt.verify(token, 'secretKey');
  console.log("decode",decoded.userId)
  const userId = decoded.userId



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
