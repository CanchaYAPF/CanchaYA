const createBooking = require("../../controllers/booking/createBooking");

const postBookingHr = async (req, res) => {
  const { day, initialHour, finalHour, totalTime, fieldName, token } = req.body;
  try {
    const postBooking = await createBooking(
      day,
      initialHour,
      finalHour,
      totalTime,
      fieldName, 
      token
    );
    res.status(200).json({ reserva: postBooking });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postBookingHr;
