const { Field, Sport } = require("../../db");
const { decodeGoogleToken, decodeJwtToken} = require("../../utils/decodedToken")//modularice el decifrado de tokens

const postField = async (name, image, sports, phone, address, city, paymentMethod, price, service, shift, token) => {
  try {
    const existingField = await Field.findOne({ where: { name } });
    if (existingField) {
      const error = new Error("La cancha ya existe");
      error.status = 409;
      throw error
    }else {
      const sportsToAdd = await Sport.findAll({ where: { name: sports } });
      //Dependiendo de si es googleToken o Token lo decodifica y le da el valor del userId
      const tokenId=await decodeJwtToken(token)
      let userId= tokenId ? tokenId: await decodeGoogleToken(token);
  
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
        UserId: userId
      });
      // console.log(newField); // Agregar un console.log para el error.
      newField.addSports(sportsToAdd);
  
      return newField;
  
      }
      
    } catch (error) {
      console.error("Error en postField:", error); // Agregar un console.log para el error.
      throw error; // Re-lanzar el error para que se propague en la aplicación.
    }
};

module.exports = postField;
