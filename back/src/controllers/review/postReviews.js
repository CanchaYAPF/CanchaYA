const { Review, Field, User } = require("../../db");
const jwt = require("jsonwebtoken")
const postReviews = async (rate, description, FieldId, token) => {
  

[]
    
  


    if (!rate || !description) {
      throw new Error("Faltan datos por completar");
    }


    const decoded = jwt.verify(token, 'secretKey');
    
    const UserId = decoded.userId


     const user =  await User.findAll({where:{id : UserId},})
    const field = await Field.findAll({where:{id : FieldId}})
  const  fieldd = field.id
const userr = user.id

    
    
  //   if (!field) {
  //     throw new Error("Cancha no encontrada");
  // }

    const review = await Review.create({
      rate,
      description,
      FieldId,
      UserId,
      
    });

    // const fieldWithReview = await Field.findByPk(FieldId);
    // const userdWithReview = await User.findByPk(userId);

    return {
      review: review,
       cancha: user ,
       user: field,
  };
    
    
  
};

module.exports = postReviews;
