const { User } = require("../../../db");

const deleteUser= async (id)=>{

        const deleteUser = await User.destroy({where:{
                id:id
        }})
        return deleteUser, {msg:"Usuario borraro con exito"}
   
}
module.exports=deleteUser