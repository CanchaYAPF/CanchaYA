const { User } = require("../../../db");

const desactiveUser = async (id) => {
  const user = await User.findByPk(id);
  const newStatus= !user.status
  if (!user) {
    throw new Error("Usuario no encontrado");
  } else {
    await user.update({ status: newStatus });
    let estado;
    newStatus === false ? estado = "desactivado" : estado = "activado";
    return { msje: `estado del usuario : ${estado}`  };
  }
};

module.exports = desactiveUser