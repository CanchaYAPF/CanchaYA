const {User}= require('../../db');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login= async(mail,password)=>{
    const user = await User.findOne({ where: { mail } });

    if(!user) {
        throw new Error('Este usuario no esta registrado')
    }else{
        const passwordIsValid = await bcrypt.compare(password, user.password)
        if (passwordIsValid) {
            const token = jwt.sign({ userId: user.id }, "secretKey");
            return { user, token };
          } else {
            throw new Error("Contraseña inválida");
          }
        }

}
module.exports= login