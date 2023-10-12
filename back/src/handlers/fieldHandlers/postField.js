const postField = require("../../controllers/fieldControllers/postField");

const postFieldHr = async (req, res) => {
  const { name, bankAccount, image, mail, adress, city, sports } = req.body;
  try {
    const arrSports = sports.split(", ");
    const newField = await postField(
      name,
      bankAccount,
      image,
      mail,
      adress,
      city,
      arrSports
    );
    res.status(200).json(newField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFieldHr;
