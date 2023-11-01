const { User } = require("../../../db");
const bcrypt = require("bcryptjs");

const editUser= async (id,name,lastname,mail,password,phone,birthdate)=>{
    
    let updateData = {};
    if (name) updateData.name = name;
    if (lastname) updateData.lastname = lastname;
    if (mail) updateData.mail = mail;
    if (password) updateData.password = bcrypt.hashSync(password,10);
    if (phone) updateData.phone = phone;
    if (birthdate) updateData.birthdate = birthdate;
    
    const userChange = await User.update(updateData, { where: { id: id } });

    return userChange
}
module.exports=editUser