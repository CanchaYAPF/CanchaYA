const { Field, Sport } = require("../../db");


const getById = async (id) => {
  const result = await Field.findAll({where:{id : id},
    
    include: {
      model: Sport,
      attributes : ["name"],
      through: {
          attributes: [],
      },
    }
  
  }) 





  const normalize = (arr) => 
  arr.map((field) => {
  
  
      const sport = field.Sports.map(objeto => objeto.name);
      const sports = sport.join(', ');

      const shif = field.shift.map(objeto => objeto);
      const shifs = shif.join(', ');

      const pay = field.paymentMethod.map(objeto => objeto);
      const pays = pay.join(', ');

      const ser = field.service.map(objeto => objeto);
      const servs = ser.join(', ');
  
      return {
        id :field.id,
        name :field.name,
        image:field.image,
        sports: sports,
        address:field.address,
        city:field.city,
        phone:field.phone,
        price:field.price,
        shift:shifs,
        paymentMethod:pays,
        service:servs
          
          
          
      };
  });





    if (!result) {
      throw new Error(`Cancha con id: ${id} no encontrada en la base de datos`);
    }
    return normalize(result);
  }
;

module.exports = getById;
