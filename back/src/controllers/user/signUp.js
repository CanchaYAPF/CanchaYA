const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sgMail = require('@sendgrid/mail')
require('dotenv').config();

const signUp = async (name, lastname, mail, password, birthdate, phone) => {
  const user = await User.findOne({ where: { mail } });
  const encryptPassword = await bcrypt.hash(password.toString(), 10);
  if (!name || !lastname ||!mail || !password || !birthdate || !phone) {
    throw new Error("Debes llenar todos los campos");
  } else if (user) throw new Error("Este mail ya existe");
  else {
    const newUser = await User.create({
      name,
      lastname,
      mail,
      password: encryptPassword,
      birthdate,
      phone,
    });
    const msg = {
      to: mail, 
      from: 'proyectozucca@gmail.com', 
      subject: 'Bienvenido a CanchasYA',
      text: '¡Gracias por unirte a nuestra aplicación!',
      html: '<strong>¡Gracias por unirte a nuestra aplicación!</strong>',
    };
    sgMail.send(msg)
      .then(() => console.log('Correo electrónico de bienvenida enviado'))
      .catch((error) => console.error('Error al enviar el correo electrónico de bienvenida', error));
    
    const token = await jwt.sign({ userId: newUser.id }, "secretKey");
    return { auth:"registro exitoso", token:token };
  }
  
};

module.exports = signUp;