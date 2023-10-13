const { Review } = require("../../db");

const getReviews = async () => {
  try {
    const allReviews = await Review.findAll({
      attributes: ["id", "rate", "description"],
    });

    const reviewFormat = allReviews.map((review) => {
      return {
        id: review.dataValues.id,
        rate: review.dataValues.rate,
        description: review.dataValues.description,
      };
    });

    return reviewFormat;
  } catch (error) {
    console.error("Error al buscar reseñas:", error);
    return null;
  }
};

module.exports = getReviews;
