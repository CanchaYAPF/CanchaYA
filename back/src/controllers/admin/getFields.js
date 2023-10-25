const { Field, Booking } = require("../../db");
const getFields =(name)=>{
    if(name){
        const allFieldsbyName= Field.findAll({
            where:{name:{
                [Op.like]:`%${name}%`}}
            },{include:Booking})
        return allFieldsbyName
    }else{
        const allFields= Field.findAll({include: Booking})
        return allFields
    }

}
module.exports = getFields