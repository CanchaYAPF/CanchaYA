// const { Booking, User, Field } = require('../../db');
// const jwt = require('jsonwebtoken'); // Asegúrate de importar jwt si aún no lo has hecho.


// module.exports = createBooking;

// async function createBooking(day, initialHour, finalHour, totalTime, fieldName, token) {
//     try {
//         if (!day || !initialHour || !finalHour || !totalTime || !fieldName || !token) {
//             throw new Error("Faltan datos por completar");
//         }
 
//         const decoded = jwt.verify(token, 'secretKey');
//         console.log("decode", decoded.userId);
//         const userId = decoded.userId;

//         const busySchedule = await Booking.findAll({ where: { initialHour } });
//         if (busySchedule.length) {
//             throw new Error("Horario ocupado");
//         }

//         const field = await Field.findOne({ where: { name: fieldName } });

//         if (!field) {
//             throw new Error("Cancha no encontrada");
//         }

//         const user = await User.findByPk(userId);

//         if (!user) {
//             throw new Error("Usuario no encontrado");
//         }
        

//         const booking = await Booking.create({
//             day,
//             initialHour,
//             finalHour,
//             totalTime,
//             fieldId: field.id,
//             userId: user.id, 
//         });

//         const fieldWithReserva = await Field.findByPk(field.id);

//         if (!fieldWithReserva) {
//             throw new Error("Error al recuperar la información de la cancha");
//         }

//         return {
//             reserva: booking,
//             cancha: fieldWithReserva,
//             usuario: user,
//         };
//     } catch (error) {
//         console.error(error);
//         throw new Error(error.message);
//     }
// }


const { Booking, Field } = require('../../db');
const jwt = require('jsonwebtoken'); // Asegúrate de importar jwt si aún no lo has hecho.
const { Op } = require('sequelize');// Para consultas complejas

async function createBooking(day, initialHour, finalHour, totalTime, fieldName, token) {
    try {
        if (!day || !initialHour || !finalHour || !totalTime || !fieldName || !token) {
            throw new Error("Faltan datos por completar");
        }
        const decoded = jwt.verify(token, 'secretKey');
        console.log("decode", decoded.userId);
        const UserId = decoded.userId;
        //verificar si existe field
       const field=await Field.findOne({where:{name:fieldName}})
       //falta opcion para que busque en la bd harcodeada
       if(!field) {
        throw new Error("Esta cancha no existe")}
        else{
        //verificar horarios disponibles de ese field
        const fieldAvailableHours = await field.getBookings({
            where: {
                day,
                [Op.or]: [
                    { initialHour: {
                    [Op.between]: [initialHour, finalHour]}},
                    { finalHour: {
                    [Op.between]: [initialHour, finalHour]}},
                    {[Op.and]: [
                    { initialHour: { [Op.lte]: initialHour }},
                    { finalHour: { [Op.gte]: finalHour } }]}
                ]}
            });

            if(fieldAvailableHours.length === 0){
                //crea booking y lo asocia con field
                const booking= await Booking.create({day,initialHour,finalHour,totalTime,UserId})
                await booking.addField(field);
                const bookingWithField = await Booking.findOne({
                    where: { id: booking.id },
                    include: Field
                });
                console.log("bookingwithfield",bookingWithField)
                return bookingWithField
                
            }else{
                throw new Error("Horario no disponible")
            }

        }

    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
}
module.exports = createBooking;
