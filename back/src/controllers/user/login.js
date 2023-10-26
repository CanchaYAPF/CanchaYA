const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (mail, password) => {
  const user = await User.findOne({ where: { mail } });

  if (!user) {
    throw new Error("Este usuario no esta registrado");
  } else {
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      throw new Error("Contraseña inválida");
    } else if (user.status !== true) {
      throw new Error("El usuario se encuentra desactivado comunicate con soporte tecnico para activarlo");
    } else {
      const token = jwt.sign({ userId: user.id }, "secretKey");
      return { auth:"Validación exitosa", token:token };
    }
  }
};


module.exports = login;
