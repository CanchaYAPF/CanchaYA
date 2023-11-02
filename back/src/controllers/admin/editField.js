const { Field, Sport } = require('../../db');
const { Op } = require('sequelize');

const editField = async (id, data) => {
    let updateData = {};
    if (data.name) updateData.name = data.name;
    if (data.image) updateData.image = data.image;
    if (data.phone) updateData.phone = data.phone;
    if (data.address) updateData.address = data.address;
    if (data.city) updateData.city = data.city;
    if (data.paymentMethod) updateData.paymentMethod = data.paymentMethod;
    if (data.price) updateData.price = data.price;
    if (data.service) updateData.service = data.service;
    if (data.shift) updateData.shift = data.shift;

    if (Object.keys(updateData).length === 0) {
        throw new Error('No se proporcionaron datos para actualizar');
    }

    await Field.update(updateData, { where: { id: id } });

    // Después de la actualización, obtenemos el campo actualizado
    const updatedField = await Field.findOne({ where: { id: id } });

    // Si se proporcionaron deportes, los actualizamos
    if (data.sports) {
        // Obtenemos las instancias de los deportes
        const sportsInstances = await Sport.findAll({
            where: {
                name: {
                    [Op.in]: Object.keys(data.sports).filter(sport => data.sports[sport])
                }
            }
        });

        // Asociamos los deportes con el campo
        await updatedField.setSports(sportsInstances);
    }

    return updatedField;
}

module.exports = editField;