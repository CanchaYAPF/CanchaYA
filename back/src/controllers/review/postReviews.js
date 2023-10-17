const { Review, Field, User } = require("../../db");

const postReviews = async (rate, description, FieldId, UserId) => {
  try {
    if (!rate || !description) {
      throw new Error("Faltan datos por completar");
    }

    const user = await User.findOne({ where: { id: UserId } });
    const field = await Field.findOne({ where: { id: FieldId } });
  
    if (!field) {
      throw new Error("Cancha no encontrada");
  }

    const review = await Review.create({
      rate,
      description,
      FieldId : field.id,
      UserId : user.id
      
    });

    const fieldWithReview = await Field.findByPk(field.id);
    const userdWithReview = await User.findByPk(user.id);

    return {
      review: review,
      cancha: fieldWithReview ,
      user: userdWithReview,
  };
    
    
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

module.exports = postReviews;
