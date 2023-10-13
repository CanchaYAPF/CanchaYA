const { Field, Sport } = require("../../db");


const getById = async (id) => {
  if (isNaN(id)) {
    const field = await Field.findByPk(
      id
      // ,{ include: Sport }
    ); //incluye información del equipo asociado al conductor

    if (!field) {
      throw new Error(`Cancha con id: ${id} no encontrada en la base de datos`);
    }
    return field;
  }
};

module.exports = getById;
