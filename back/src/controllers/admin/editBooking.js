const {Booking}=require("../../db")
const editBooking= async (id,day, initialHour, finalHour, totalTime, fieldId, userId)=>{
    const updateData={}
    if (day) updateData.day = day;
    if (initialHour) updateData.initialHour = initialHour;
    if (finalHour) updateData.finalHour = finalHour;
    if (totalTime) updateData.totalTime = totalTime;
    if (fieldId) updateData.fieldId = fieldId;
    if (userId) updateData.userId = userId;
  const editBooking= Booking.update( updateData, {where:{id:id }})
  return editBooking
}
module.exports= editBooking