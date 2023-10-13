const getBooking = require("../../controllers/booking/getBooking");

const getBookingHr = async (req, res) => {
  try {
    const response = await getBooking();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = getBookingHr;
