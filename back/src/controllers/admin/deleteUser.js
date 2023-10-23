const { User } = require("../../db");

const deleteUser= async (id,token)=>{

        const user = await User.findByPk(id,token)
        // if(user){
        //   await User.destroy({
        //     where:{
        //       id:user.id
        //     }
        //   });
        // }
        console.log(user)

}
module.exports=deleteUser