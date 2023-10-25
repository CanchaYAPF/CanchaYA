const { Booking, User, Field } = require("../../db");

const getBooking = async () => {
  try {
    const allBookings = await Booking.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "lastname"],
        },
        {
          model: Field,
          attributes: ["id", "image"],
          through: "BookingField",
        },
      ],
    });

    const bookingsObject = allBookings.map((booking) => {
      return {
        id: booking.id,
        day: booking.day,
        initialHour: booking.initialHour,
        finalHour: booking.finalHour,
        totalTime: booking.totalTime,
        userName: booking.User ? `${booking.User.name} ${booking.User.lastname}` : "N/A",
        fieldImage: booking.Field ? booking.Field.image : "N/A",
        fieldId: booking.Field ? booking.Field.id : "N/A",
      };
    });

    return bookingsObject;
  } catch (error) {
    console.error("Error al buscar reservas:", error);
    return null;
  }
};



module.exports = getBooking;
