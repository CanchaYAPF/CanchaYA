const { Booking, User, Field } = require("../../db");


const getBooking = async () => {
  try {
    const allBookings = await Booking.findAll({
      attributes: ["id", "day", "initialHour", "finalHour", "totalTime"],
      include: [
        {
          model: User,
          attributes: ["name", "lastname"],
        },
        {
          model: Field,
          attributes: ["id", "image"],
        },
      ],
    });

    const bookingsObject = allBookings.map((booking) => {
      return {
        id: booking.dataValues.id,
        day: booking.dataValues.day,
        initialHour: booking.dataValues.initialHour,
        finalHour: booking.dataValues.finalHour,
        totalTime: booking.dataValues.totalTime,
        userName: booking.User ? `${booking.User.name} ${booking.User.lastname}` : "N/A",
        fieldId: booking.Field ? booking.Field.id : "N/A",
        fieldImage: booking.Field ? booking.Field.image : "N/A",
      };
    });
    return bookingsObject;
  } catch (error) {
    console.error("Error al buscar reservas:", error);
    return null;
  }
};

module.exports = getBooking;
