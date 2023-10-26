const { Review } = require("../../db");

const getReviews = async () => {


  try {
    const allReviews = await Review.findAll();
    return allReviews;



  } catch (error) {
    console.error("Error al buscar reseñas:", error);
    return null;
  }
};

module.exports = getReviews;
