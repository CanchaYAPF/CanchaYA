const { Booking, Field } = require("../../db");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

async function createBooking(
  day,
  initialHour,
  finalHour,
  totalTime,
  fieldId,
  userId
) {
  try {
    if (
      !day ||
      !initialHour ||
      !finalHour ||
      !totalTime ||
      !fieldId ||
      !userId
    ) {
      throw new Error("Faltan datos por completar");
    }

    const decoded = jwt.verify(userId, "secretKey");
    console.log("decode", decoded.userId);
    const UserId = decoded.userId;

    const field = await Field.findByPk(fieldId);

    if (!field) {
      throw new Error("Esta cancha no existe");
    } else {
      // Verificar horarios disponibles de ese field en un rango de días
      const fieldAvailableHours = await field.getBookings({
        where: {
          [Op.and]: [
            {
              day,
              [Op.or]: [
                {
                  [Op.and]: [
                    {
                      initialHour: {
                        [Op.between]: [initialHour, finalHour],
                      },
                    },
                    {
                      finalHour: {
                        [Op.between]: [initialHour, finalHour],
                      },
                    },
                    {
                      [Op.and]: [
                        { initialHour: { [Op.lte]: initialHour } },
                        { finalHour: { [Op.gte]: finalHour } },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      });

      if (fieldAvailableHours.length === 0) {
        // Crea la reserva y la asocia con el campo
        const booking = await Booking.create({
          day,
          initialHour,
          finalHour,
          totalTime,
          UserId,
          FieldId: fieldId,
          status: false,
        });

        const bookingWithField = await Booking.findOne({
          where: { id: booking.id },
          include: {
            model: Field,
            attributes: ["name"],
          },
        });

        console.log("bookingwithfield", bookingWithField);
        return bookingWithField;
      } else {
        throw new Error("Horario no disponible");
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

module.exports = createBooking;
