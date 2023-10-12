const { Field, Sport } = require("../../db");

const postField = async (name, bankAccount, image, mail, address, city) => {
  const existingField = await Field.findOne({ where: { name } });
  if (existingField) {
    const error = new Error("La cancha ya existe");
    error.status = 409;
    throw error;
  }

  // const sport = await Promise.all(
  //   arrSports.map(async (sportName) => {
  //     const [result] = await Sport.findOrCreate({ where: { name: sportName } });
  //     return result.id;
  //   })
  // );

  const newField = await Field.create({
    name,
    bankAccount,
    image,
    mail,
    address,
    city,
  });

  //   await newField.addSports(sport);

  return newField;
};

module.exports = postField;
