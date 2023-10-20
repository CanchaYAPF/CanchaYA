const { Favorito,Field } = require("../../db");
const jwt = require("jsonwebtoken")
const mock = require ("../../../../mockUp")



const getAllFavs = async (id) => {
  
  const decoded = jwt.verify(id, 'secretKey');
  console.log("decode",decoded.userId)
  const userId = decoded.userId


  const allFavoRelations =  await Favorito.findAll({where:{idUser : userId},})



  
const ids = allFavoRelations.map(fav=>fav.idsFields)

// idsDb = ids.filter(id => isNaN(id))

// idsApi = ids.filter(id => !isNaN(id))


// const fieldDb = idsDb.forEach(id => {
//   const resultDb = Field.findAll({where:{id : id}})
//   return resultDb
// });



// const fieldtApi = idsApi.forEach(id => {
//   const resultApi = mock.filter(f => f.id===id)
//   return resultApi
// });




// const response = [...fieldDb,...fieldtApi]











  const response = ids.map( id => {
     const source = isNaN(id) ? "bdd" : "api";

const result = source === "api" ? mock.filter(f => f.id===id):


   Field.findAll({where:{id : id}}) 

return result

  })
  



  






return response;

};

module.exports = getAllFavs;
