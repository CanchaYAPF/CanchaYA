const {Booking,Field} =require("../../db")
const getAllBooking=()=>{
  const allBooking= Booking.findAll({include: Field})
  return allBooking
}
module.exports= getAllBooking