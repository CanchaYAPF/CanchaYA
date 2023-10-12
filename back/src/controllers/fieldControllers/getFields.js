const { Field, Sport } = require("../../db");
const axios = require("axios");

const getAllFields = async (name) => {
  const allFieldsDb = await Field.findAll({
    include: {
      model: Sport,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const allFieldsDbFormat = allFieldsDb.map((field) => {
    return {
      id: field.id,
      name: field.name,
      bankAccount: field.bankAccount,
      image: field.image,
      mail: field.mail,
      address: field.address,
      city: field.city,
      sports: field.Sport.map((sport) => sport.name).join(", "),
    };
  });

  const request = (await axios("http://localhost:5000/fields")).data;

  const allFieldsApi = request.map((field) => {
    return {
      id: field.id,
      name: field.name,
      bankAccount: field.bankAccount,
      image: field.image,
      mail: field.mail,
      address: field.address,
      city: field.city,
      sports: field.sports,
    };
  });

  let allFields = [...allFieldsApi, ...allFieldsDbFormat];

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
  return allFields;
};

module.exports = getAllFields;
