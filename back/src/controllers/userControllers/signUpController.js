const {User}= require('../../db');

//--SignUp--//
const signUpController= async(name,mail,password)=>{
const user = await User.findOne({ where: { mail } });
  if(!name||!mail||!password) {
    throw new Error('Debes llenar todos los campos')
  }
  else if(user) throw new Error ('Este mail ya existe')
  else{
  const newUser= await User.create({name,mail,password})
  return newUser
}
}
module.exports={signUpController}