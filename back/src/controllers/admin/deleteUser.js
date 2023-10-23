const { User } = require("../../db");

const deleteUser= async (id)=>{
    try {
        const user = await User.findByPk(id)
        if(user){
          await User.destroy({
            where:{
              id:user.id
            }
          });
          console.log(`${deleted} registro(s) eliminado(s)`);
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