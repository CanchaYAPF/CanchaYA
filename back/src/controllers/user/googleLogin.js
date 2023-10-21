const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const { OAuth2Client } = require('google-auth-library');
const generatePassword = require("../../utils/automaticPassword");
 
const googleLogin=async(token)=>{
 //recibir token, realizar las validaciones y decodificarlo
 const CLIENT_ID_GOOGLE = '643395136180-j6pn9slv1rsdsrkq88d1aa1s60i39eob.apps.googleusercontent.com'//deberia ir en un archivo env
 const client = new OAuth2Client(CLIENT_ID_GOOGLE);
 const ticket = await client.verifyIdToken({
   idToken: token,
   audience: CLIENT_ID_GOOGLE,
 });
//generar usuario con datos del token
 newGoogleUser= {
   name:ticket.payload.given_name,
   lastname:ticket.payload.family_name,
   mail:ticket.payload.email
 }
 const user = await User.findOne({ where: { mail: newGoogleUser.mail } });

 //generar password aleatoria y encriptarla
 const password=generatePassword(10);
 const encryptPassword=await bcrypt.hash(password,10);

 //comprobaciones de info antes de crear usuario:

 if(!newGoogleUser.name || !newGoogleUser.lastname || !newGoogleUser.mail){
   throw new Error("problemas al recibir/decifrar el token de Google");
 }else if(user){
   return { auth:"Usuario ya registrado, bienvenido de nuevo"};
 }else{
   const newUser = await User.create({
     name:ticket.payload.given_name,
     lastname:ticket.payload.family_name,
     mail:ticket.payload.email,
     password: encryptPassword,
   });

    return newUser
 }    

}
module.exports=googleLogin