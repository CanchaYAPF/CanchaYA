const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const generatePassword = require("../../utils/automaticPassword");

const googleSignUp = async (name,lastname,mail) => {

  const user = await User.findOne({ where: { mail } });
  const password=(generatePassword(10));
  const encryptPassword = await bcrypt.hash(password.toString(), 10);
  if (!name || !lastname ||!mail) {
    throw new Error("Error al recibir los datos del usuario de Google");

  } else if (user) return { auth:"usuario ya registrado, bienvenido de vuelta" };

  else {
    const newUser = await User.create({
      name,
      lastname,
      mail,
      password: encryptPassword,
    });
    
    return { auth:"registro exitoso"};
  }
};

module.exports = googleSignUp;