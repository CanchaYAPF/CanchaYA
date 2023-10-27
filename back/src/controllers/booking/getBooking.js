const { Booking, User, Field } = require("../../db");

const getBooking = async () => {
  try {
    const allBookings = await Booking.findAll({
      include: [{
        model: Field,
        attributes: ['id','name','image'], // Especifica el campo que deseas
      },{
        model: User,
        attributes: ['name','lastname'], // Especifica el campo que deseas
      }],
    });
    // console.log("allBooking: ", allBookings[0].Fields.dataValues)
    
    const bookingsObject = allBookings.map((booking) => {
      // console.log("bookinguser: ",booking.Fields.image)
      return {
        id: booking.id,
        day: booking.day,
        initialHour: booking.initialHour,
        finalHour: booking.finalHour,
        totalTime: booking.totalTime,
        userName: booking.User ? `${booking.User.name} ${booking.User.lastname}` : "N/A",
        fieldImage: booking.Field?.image || "N/A",
        fieldName: booking.Field?.name || "N/A",
        fieldId: booking.Field?.id || "N/A",
      };
    });

    return bookingsObject;
  } catch (error) {
    console.error("Error al buscar reservas:", error);
    return null;
  }
};



module.exports = getBooking;
