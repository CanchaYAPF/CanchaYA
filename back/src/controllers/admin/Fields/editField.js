const { Field } = require("../../../db");
const editField =async ( id,name, image, phone,sports, address, city, paymentMethod, price, service, shift ) => {
    //verifica y solo incluye los elementos que no llegan vacios de body
    let updateData = {};
    if (name) updateData.name = name;
    if (image) updateData.image = image;
    if (sports) updateData.sports = sports;
    if (phone) updateData.phone = phone;
    if (address) updateData.address = address;
    if (city) updateData.city = city;
    if (paymentMethod) updateData.paymentMethod = paymentMethod;
    if (price) updateData.price = price;
    if (service) updateData.service = service;
    if (shift) updateData.shift = shift;

    const editingField= Field.update(updateData,{where:{id:id}})

   return editingField
}

module.exports= editField