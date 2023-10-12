const { Booking, User, Field } = require('../../db');

module.exports = createBooking;

async function createBooking(day, initialHour, finalHour, totalTime) {
    try {
        if (
            !day ||
            !initialHour ||
            !finalHour ||
            !totalTime
        ) {
            throw new Error("Faltan datos por completar");
        }

        const busySchedule = await Booking.findAll({ where: { initialHour: initialHour } });
        if (busySchedule.length) {
            throw new Error("Horario ocupado");
        }

        const booking = await Booking.create({
            day,
            initialHour,
            finalHour,
            totalTime,
        });

        return booking;
    } catch (error) {
        console.error(error); 
        throw new Error(error.message); 
    }
}
