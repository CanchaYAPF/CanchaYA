const getAllBooking = require("../../controllers/admin/getAllBooking")

const getAllBookingHr=async (req,res)=>{
try {
    const response= await getAllBooking()
    res.status(200).json(response)
} catch (error) {
    res.status(400).send({error:error.message})
}
}
module.exports=getAllBookingHr