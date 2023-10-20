const { Booking, User, Field } = require('../../db');
const jwt = require('jsonwebtoken'); // Asegúrate de importar jwt si aún no lo has hecho.


module.exports = createBooking;

async function createBooking(day, initialHour, finalHour, totalTime, fieldName, token) {
    try {
        if (!day || !initialHour || !finalHour || !totalTime || !fieldName || !token) {
            throw new Error("Faltan datos por completar");
        }
 
        const decoded = jwt.verify(token, 'secretKey');
        console.log("decode", decoded.userId);
        const userId = decoded.userId;

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
