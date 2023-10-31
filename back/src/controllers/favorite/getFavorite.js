const { Favorito, Field } = require("../../db");
const jwt = require("jsonwebtoken");
const mock = require("../field/getFields");

const getAllFavs = async (id) => {
  const decoded = jwt.verify(id, "secretKey");
  console.log("decode", decoded.userId);
  const userId = decoded.userId;

  const allFavoRelations = await Favorito.findAll({
    where: { idUser: userId },
  });

  // const ids = allFavoRelations.map( fav=>fav.idsFields)
  // const idsUU = ids.filter( id=> id.length> 10)

  // const resposeDb = idsUU.map(id =>{

  // return  Field.findAll({where:{id : id}})

  // })

  //   const responseApi = allFavoRelations.map( relation => {
  //     id = relation.idsFields
  //     return mock.filter(f => f.id===id)
  //   })

  return allFavoRelations;
};

module.exports = getAllFavs;
