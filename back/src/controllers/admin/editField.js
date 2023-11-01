const { Field } = require('../../db');

const editField = async (id, data) => {
    let updateData = {};
    if (data.name) updateData.name = data.name;
    if (data.image) updateData.image = data.image;
    if (data.sports) updateData.sports = data.sports;
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

    return updatedField;
}

module.exports = editField;