const getAllFields = require("../../controllers/fieldControllers/getFields");

const allFieldsHr = async (req, res) => {
  try {
    const allFields = await getAllFields();
    res.status(200).json(allFields);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = allFieldsHr;
