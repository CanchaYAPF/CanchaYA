const { Booking } = require("../../db");

const getBooking = async () => {
  try {
    const allBooking = await Booking.findAll({
      attributes: ["id", "day", "initialHour", "finalHour", "totalTime"],
    });

    const bookingsObject = allBooking.map((booking) => {
      return {
        id: booking.dataValues.id,
        day: booking.dataValues.day,
        initialHour: booking.dataValues.initialHour,
        finalHour: booking.dataValues.finalHour,
        totalTime: booking.dataValues.totalTime,
      };
    });

    return bookingsObject;
  } catch (error) {
    console.error("Error al buscar reservas:", error);
    return null;
  }
};

module.exports = getBooking;
