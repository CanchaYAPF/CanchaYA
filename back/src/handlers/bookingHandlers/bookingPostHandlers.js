const createBooking = require ("../../controllers/bookingControllers/postBooking")

const postBooking = async (req,res) => {
    const {day, initialHour, finalHour, totalTime} = req.body


try {
    const postBooking = await createBooking (day, initialHour, finalHour, totalTime);
    res.status(200).json({reserva:postBooking})
} catch (error) {
    res.status(400).json({error:error.message})
    
}

}

module.exports = postBooking