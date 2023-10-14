const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signUp = async (name, lastname, mail, password) => {
  const user = await User.findOne({ where: { mail } });
  const encryptPassword = await bcrypt.hash(password.toString(), 10);
  if (!name || !lastname ||!mail || !password) {
    throw new Error("Debes llenar todos los campos");
  } else if (user) throw new Error("Este mail ya existe");
  else {
    const newUser = await User.create({
      name,
      lastname,
      mail,
      password: encryptPassword,
    });
    const token = await jwt.sign({ userId: newUser.id }, "secretKey");
    return { newUser, token };
  }
};

module.exports = signUp;
