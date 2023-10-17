const { Field, Sport } = require("../../db");


const getAllFields = async (name) => {
  const allFields = await Field.findAll({
    // include: {
    //   model: Sport,
    //   attributes: ["name"],
    //   through: { attributes: [] },
    // },
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

  return allFields;
};

module.exports = getAllFields;
