const { Field, Sport } = require("../../db");


const getAllFields = async (name) => {
  const allFields = await Field.findAll({
    include: {
      model: Sport,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  if (!allFields.length) {
    const bulk = await Field.bulkCreate(mock, { include: [Sport] });
  }

  const allFieldsFinal = await Field.findAll({
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
    arr?.map((field) => {
      const sport = field.Sports?.map((objeto) => objeto.name);
      const sports = sport?.join(", ");
      const shif = field.shift?.map((objeto) => objeto);
      const shifs = shif?.join(", ");
      const pay = field.paymentMethod?.map((objeto) => objeto);
      const pays = pay?.join(", ");
      const ser = field.service?.map((objeto) => objeto);
      const servs = ser?.join(", ");
      return {
        id: field.id,
        name: field.name,
        image: field.image,
        sports: sports,
        address: field.address,
        city: field.city,
        phone: field.phone,
        price: field.price,
        shift: shifs,
        paymentMethod: pays,
        service: servs,
        status:field.status
      };
    });
  const database = normalize(allFieldsFinal);
  return [...database];
  // return allFields;
};

module.exports = getAllFields;
// module.exports = mock;
