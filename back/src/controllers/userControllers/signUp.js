const {User}= require('../../db');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//--SignUp--//
const signUp= async(name,mail,password)=>{
  
const encryptPassword= await bcrypt.hash(password.toString(),10) 
const user = await User.findOne({ where: { mail } });
  if(!name||!mail||!password) {
    throw new Error('Debes llenar todos los campos')
  }
  else if(user) throw new Error ('Este mail ya existe')
  else{

      const newUser = await User.create({ name, mail, password: encryptPassword });
      
      return new Promise((resolve, reject) => {
        jwt.sign({ userId: newUser.id }, "secretKey", (error, token) => {
          if (error) {
            reject(error);
          } else {
            resolve({ newUser, token });
          }
        });
      });
}}
module.exports={signUp}