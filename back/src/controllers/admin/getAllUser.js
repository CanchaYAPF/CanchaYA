const { Op } = require('sequelize');// Para consultas complejas
const { User,Booking } = require("../../db");

const getAllUsers = async()=>{
        // if(mail){
        // const userByMail= await User.findOne({
        //         where:{ mail:{
        //                 [Op.like]:`%${mail}%}`}}
        //         },{include: Booking})
        // return userByMail
        // }else{
        const allUsers = await User.findAll({include: Booking})
        return allUsers 
        // }
}

module.exports = getAllUsers