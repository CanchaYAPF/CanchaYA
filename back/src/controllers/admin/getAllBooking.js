const {Booking,Field} =require("../../db")
const getAllBooking=async()=>{
  const allBooking= await Booking.findAll({include: Field})
  return allBooking
}
module.exports= getAllBooking