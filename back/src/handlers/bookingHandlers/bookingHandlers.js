const getBooking = require ("../../controllers/bookingControllers/getBooking")



const getAllBooking = async (req, res) => {
    try {
        const response = await getBooking();
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).send ({error: error.message});
        
    }
} 

module.exports = getAllBooking