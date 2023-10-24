const { Booking, User, Field } = require('../../db');
const jwt = require('jsonwebtoken'); // Asegúrate de importar jwt si aún no lo has hecho.


module.exports = createBooking;

async function createBooking(day, initialHour, finalHour, totalTime, fieldId, token) {
    try {
        if (!day || !initialHour || !finalHour || !totalTime || !fieldId || !token) {
            throw new Error("Faltan datos por completar");
        }
 
        const decoded = jwt.verify(token, 'secretKey');
        console.log("decode", decoded.userId);
        const userId = decoded.userId;

        const busySchedule = await Booking.findAll({ where: { initialHour } });
        if (busySchedule.length) {
            throw new Error("Horario ocupado");
        }

        const field = await Field.findOne({ where: { id: fieldId } });

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
            fieldId: field.token,
            userId: user.token, 
        });

        const fieldWithReserva = await Field.findByPk(field.id);

        if (!fieldWithReserva) {
            throw new Error("Error al recuperar la información de la cancha");
        }

        const customResponse = {
            reserva: {
                id: booking.id,
                day: booking.day,
                initialHour: booking.initialHour,
                finalHour: booking.finalHour,
                totalTime: booking.totalTime,
                UserId: booking.userId,
            },
            cancha: {
                id: fieldWithReserva.id,
                name: fieldWithReserva.name,
            },
            usuario: {
                id: user.id,
                name: user.name,
            },
        };

        return customResponse;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}