const editBooking = require("../../controllers/admin/editBooking")

const editBookingHr=(req,res)=>{
    const {id}= req.params
    const {day, initialHour, finalHour, totalTime, fieldId, userId} = req.body
try {
    const response= editBooking(id,day, initialHour, finalHour, totalTime, fieldId, userId)
    res.status(200).jason(response)
} catch (error) {
    res.status(400).send({error:error.messsage})
}
}
module.exports= editBookingHr