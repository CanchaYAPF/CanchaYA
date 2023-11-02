const updateBooking = require("../../controllers/booking/updateBooking");

const updateBookingHr = async (req, res) => {
  const { params } = req.params;
  try {
    const response = await updateBooking(params);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = updateBookingHr;
