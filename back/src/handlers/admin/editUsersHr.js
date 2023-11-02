const editUser = require("../../controllers/admin/editUser")

const editUserHr=async(req,res)=>{
    const {id}=req.params;
    const {name,lastname,mail,password,phone,birthdate}= req.body
    console.log("id: ",id)
  try {
    const response = await editUser(id,name,lastname,mail,password,phone,birthdate)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).send({ error: error.message });
    
  }
}
module.exports =editUserHr