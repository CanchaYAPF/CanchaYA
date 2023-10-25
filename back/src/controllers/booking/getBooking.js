const { Booking, User, Field } = require("../../db");

const getBooking = async () => {
  try {
    const allBookings = await Booking.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "lastname"], // Agrega todos los campos que necesites de User
        },
        {
          model: Field,
          attributes: ["id", "image"],

          // attributes: ["id", "name", "image"], // Agrega todos los campos que necesites de Field

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

        //fieldId: booking.Field ? booking.Field.id : "N/A",
        fieldImage: booking.Field ? booking.Field.image : "N/A",

        fieldName: booking.Field ? booking.Field.name : "N/A",

      };
    });

    return bookingsObject;
  } catch (error) {
    console.error("Error al buscar reservas:", error);
    return null;
  }
};

module.exports = getBooking;
