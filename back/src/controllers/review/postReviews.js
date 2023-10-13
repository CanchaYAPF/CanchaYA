const { Review } = require("../../db");

const postReviews = async (rate, description) => {
  try {
    if (!rate || !description) {
      throw new Error("Faltan datos por completar");
    }

    const review = await Review.create({
      rate,
      description,
    });

    return review;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = postReviews;
