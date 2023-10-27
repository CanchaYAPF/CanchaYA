const { Field, Sport } = require("../../db");
const mock = require ("../../../../mockUp")

const googleMapsApiKey = "AIzaSyAV__VfZf0oOEDAkQIhYskp9KSBHN9ZxNQ";

const getById = async (id, source) => {
  const result = source === "api" ? mock.filter((f) => f.id === id) : await Field.findAll({
    where: { id: id },
    include: {
      model: Sport,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const normalize = (arr) =>
    arr.map((field) => {
      const sport = field.Sports?.map((objeto) => objeto.name);
      const sports = sport?.join(", ");

      const shif = field.shift?.map((objeto) => objeto);
      const shifs = shif?.join(", ");

      const pay = field.paymentMethod?.map((objeto) => objeto);
      const pays = pay?.join(", ");

      const ser = field.service?.map((objeto) => objeto);
      const servs = ser?.join(", ");

      // Crear una URL de Google Maps basada en la dirección y la ciudad
      const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?q=${field.address},${field.city}&key=${googleMapsApiKey}`;

      return {
        id: field.id,
        name: field.name,
        image: field.image,
        sports: sports,
        address: field.address,
        city: field.city,
        phone: field.phone,
        price: field.price,
        shift: shifs,
        paymentMethod: pays,
        service: servs,
        googleMapsUrl: googleMapsUrl, // Agrega la URL de Google Maps
      };
    });

  if (!result) {
    throw new Error(`Cancha con id: ${id} no encontrada en la base de datos`);
  }
  return normalize(result);
};

module.exports = getById;