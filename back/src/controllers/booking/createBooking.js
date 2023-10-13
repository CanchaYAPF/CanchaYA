const { Booking, User, Field } = require('../../db');

module.exports = createBooking;

async function createBooking(day, initialHour, finalHour, totalTime, fieldName, userId) {
    try {
        if (!day || !initialHour || !finalHour || !totalTime || !fieldName || !userId) {
            throw new Error("Faltan datos por completar");
        }

        const busySchedule = await Booking.findAll({ where: { initialHour } });
        if (busySchedule.length) {
            throw new Error("Horario ocupado");
        }

        const field = await Field.findOne({ where: { name: fieldName } });

        if (!field) {
            throw new Error("Cancha no encontrada");
        }

        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        const booking = await Booking.create({
            day,
            initialHour,
            finalHour,
            totalTime,
            fieldId: field.id,
            userId: user.id, 
        });

        const fieldWithReserva = await Field.findByPk(field.id);

        if (!fieldWithReserva) {
            throw new Error("Error al recuperar la información de la cancha");
        }

        return {
            reserva: booking,
            cancha: fieldWithReserva,
            usuario: user,
        };
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}
