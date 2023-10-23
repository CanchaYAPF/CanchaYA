const { User } = require("../../db");

const getAllUsers = async()=>{

        const allUsers = await User.findAll()
        return allUsers 


}
module.exports = getAllUsers