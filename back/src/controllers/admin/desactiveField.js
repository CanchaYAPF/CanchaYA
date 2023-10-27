const { Field } = require("../../db");

const desactiveField = async (id) => {
  const field = await Field.findByPk(id);
  const newStatus= !field.status
  if (!field) {
    throw new Error("Cancha no encontrado");
  } else {
    await field.update({ status: newStatus });
    let estado;
    newStatus === false ? estado = "desactivado" : estado = "activado";
    return { msje: `estado del usuario : ${estado}`  };
  }
};

module.exports = desactiveField