const { Field, Sport } = require("../../db");
const jwt = require("jsonwebtoken")

const postField = async (name, image,sports, phone, address, city, paymentMethod, price, service,shift,token) => {
  const existingField = await Field.findOne({ where: { name } });
  if (existingField) {
    const error = new Error("La cancha ya existe");
    error.status = 409;
    throw error;
  }



  const sportsToAdd = await Sport.findAll({where:{name : sports}});



  const decoded = jwt.verify(token, 'secretKey');
  console.log("decode",decoded.userId)
  const userId = decoded.userId

  const newField = await Field.create({
    name,
    image, 
    phone,
    address,
    city,
    paymentMethod, 
    price,
    service, 
    shift,
    UserId:userId
  });

  newField.addSports(sportsToAdd);

  
  return newField;
};

module.exports = postField;
