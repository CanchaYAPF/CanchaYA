const { User,Booking } = require("../../db");

const getAllUsers = async()=>{
        const allUsers = await User.findAll({include: Booking})
        return allUsers 

}
module.exports = getAllUsers