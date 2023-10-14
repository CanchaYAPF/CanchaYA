const getAllFields = require("../../controllers/field/getFields");

const getByNameHr = async (req, res) => {
  const { name } = req.query;
  try {
    const fieldByName = await getAllFields(name);
    res.status(200).json(fieldByName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByNameHr;
