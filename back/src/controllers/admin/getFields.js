const { Field, Booking } = require("../../db");
const getFields =()=>{
  const allFields= Field.findAll({include: Booking})
  return allFields
}
module.exports = getFields