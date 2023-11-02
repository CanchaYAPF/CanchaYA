const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (mail, password) => {
  const user = await User.findOne({ where: { mail } });

  if (!user) {
    const error = new Error("Este usuario no está registrado");
    error.statusCode = 404; 
    throw error;
  } else {
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      const error = new Error("Contraseña inválida");
      error.statusCode = 401;
      throw error;
    } else if (user.status !== true) {
      const error = new Error("El usuario se encuentra desactivado. Comunícate con soporte técnico para activarlo.");
      error.statusCode = 403; // Forbidden
      throw error;
    } else {
      const token = jwt.sign({ userId: user.id, roles: user.roles }, "secretKey");
      return { auth: "Validación exitosa", token: token };
    }
  }
};


module.exports = login;
