const { User } = require("../../db");

const deleteUser= async (Id)=>{
    try {
        const user = await User.findByPk(Id)
        if(user){
          await User.destroy({
            where:{
              id:user.id
            }
          });
          return {msg: "El usuario ha sido borrado"};
        } else {
          return {msg:"El usuario que quieres borrar no existe"};
        }
      } catch (error) {
        console.error(error);
        return {msg: "Hubo un error al intentar borrar el usuario"};
      }
}
module.exports=deleteUser