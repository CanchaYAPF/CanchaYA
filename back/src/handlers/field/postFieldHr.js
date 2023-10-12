const postField = require("../../controllers/field/postField");

const postFieldHr = async (req, res) => {
  const { name, bankAccount, image, mail, address, city } = req.body;
  try {
    // const arrSports = sports.split(", ");
    const newField = await postField(
      name,
      bankAccount,
      image,
      mail,
      address,
      city
      //   arrSports
    );
    res.status(200).json(newField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFieldHr;
