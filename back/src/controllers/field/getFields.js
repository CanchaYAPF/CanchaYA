const { Field, Sport } = require("../../db");

// const mock = require("../../../../mockUp");

const getAllFields = async (name) => {
  const allFields = await Field.bulkCreate([
    {
      name: "Fútbol Cancha",
      city: "Buenos Aires",
      price: 10000,
      image:
        "https://www.neuqueninforma.gob.ar/wp-content/uploads/2022/10/web-Cancha-de-cesped-sintetico-El-Alamito-46.jpg",
      Sports: [{ name: "fulbo" }, { name: "basket" }],
    },
    {
      name: "F5 Canchas",
      city: "Buenos Aires",
      price: 15000,
      image:
        "https://i.pinimg.com/550x/00/d4/ea/00d4eaf5da36ee2f3fb79de64292ebd5.jpg",
      Sports: [{ name: "fulbo" }],
    },
  ]).then(
    await Field.findAll({
      include: {
        model: Sport,
        attributes: ["name"],
        through: { attributes: [] },
      },
    })
  );

  if (name) {
    fieldsByName = allFields.filter((field) =>
      field.name.toLowerCase().startsWith(name.toLowerCase())
    );

    if (fieldsByName.length) {
      return fieldsByName.slice(0, 15);
    } else {
      throw new Error(`No se encontró a ninguna cancha por el nombre: ${name}`);
    }
  }

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
      };
    });

  // const mockNormal = normalize(mock);...mockNormal
  const database = normalize(allFields);

  return [...database];
};

module.exports = getAllFields;
