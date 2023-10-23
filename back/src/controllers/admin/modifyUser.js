const { User } = require("../../db");

const modifyUser = async (id, prop) => {
  if (!prop || typeof prop !== 'object' || !prop.name || !prop.value) {
    return { msg: "Proporciona un objeto con las propiedades 'name' y 'value'" };
  }

  const changeUserData = await User.findByPk(id);
  if (changeUserData) {
    await changeUserData.update({
      [prop.name]: prop.value
    });
    return { msg: "El usuario ha sido actualizado", user: changeUserData };
  } else {
    return { msg: "El usuario que quieres actualizar no existe" };
  }
};

module.exports = modifyUser;

