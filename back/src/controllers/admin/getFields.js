// const { Op } = require('sequelize');// Para consultas complejas
const { Field, Booking } = require("../../db");
const getFields =()=>{
    // if(name){
    //     const allFieldsbyName= Field.findAll({
    //         where:{name:{
    //             [Op.like]:`%${name}%`}}
    //         },{include:Booking})
    //     return allFieldsbyName
    // }else{
        const allFields= Field.findAll()
        return allFields
    // }

}
module.exports = getFields