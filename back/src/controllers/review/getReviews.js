const { Review } = require("../../db");

const getReviews = async (id ) => {
console.log(id)

  try {
    const allReviews = await Review.findAll({where: { FieldId: id  }});
    
    return allReviews;



  } catch (error) {
    console.error("Error al buscar reseñas:", error);
    return null;
  }
};

module.exports = getReviews;
