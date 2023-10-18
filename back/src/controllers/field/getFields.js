const { Field, Sport } = require("../../db");


const getAllFields = async (name) => {
  const allFields = await Field.findAll({
    include: {
      model: Sport,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  if (name) {
    fieldsByName = allFields.filter((field) =>
      field.name.toLowerCase().startsWith(name.toLowerCase())
    );

    if (fieldsByName.length) {
      return fieldsByName.slice(0, 15);
    } else {
      throw new Error(`No se encontró a ninguna cancha por el nombre: ${name}`);
    }
  }





  const normalize = (arr) => 
  arr.map((field) => {
  
  
      const sport = field.sports.map(objeto => objeto.name);
  
      const sports = sport.join(', ');
  
  
      return {
          id: field.id,
          name: field.name,
          image: field.image ,
          sports: sports,
          address: field.address,
          city: field.city,
          shift: field.shift,
          paymentMethode: field.paymentMethod,
          service: field.service,
          
      };
  });






  return allFields;
};

module.exports = getAllFields;
