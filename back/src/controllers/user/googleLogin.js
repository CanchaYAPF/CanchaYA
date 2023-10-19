const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require('google-auth-library');
const generatePassword = require("../../utils/automaticPassword");

const googleLogin = async (token) => {
 //recibir token, realizar las validaciones y decodificarlo
  const CLIENT_ID_GOOGLE = '889605891641-navvi2j6f5q2p56v1nojfo9qi0vugusj.apps.googleusercontent.com'//deberia ir en un archivo env?
  const client = new OAuth2Client(CLIENT_ID_GOOGLE);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID_GOOGLE,
  });
  const tokenEmail=ticket.payload.email
  //generar password aleatoria y encriptarla
  const password=generatePassword(10);
  const encryptPassword=await bcrypt.hash(password,10);
  //vefificar existencia del email:
  const user = await User.findOne({ where: {tokenEmail} });
  //generar usuario con datos de token decodificado
  if(!ticket){
    throw new Error("Error con el tokenId");
  }else if(user){
    return { auth:"Usuario ya registrado, bienvenido de vuelta"}
  }else{
    const newUser = await User.create({
        name:ticket.payload.given_name,
        lastname:ticket.payload.family_name,
        mail:ticket.payload.email,
        password: encryptPassword,
      });
      
    return { auth:"Registro exitoso"}
  }


};

module.exports = googleLogin;

