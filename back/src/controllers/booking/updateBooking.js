const getBooking = require("./getBooking");
const { Booking } = require("../../db");
const { where } = require("sequelize");

const updateBooking = async (params) => {
  try {
    const aux = await getBooking();
    const result = aux.filter((book) => book.id === params);
    const ref = result[0].id;
    const bookResult = await Booking.findOne({ where: { id: ref } });
    await bookResult.update({ status: true });
  } catch (error) {
    console.error("Error en updateBooking:", error);
    return null;
  }
};

module.exports = updateBooking;
