const { getById } = require("../../controllers/fieldControllers/getById");

const getByIdHr = async (req, res) => {
  const { id } = req.params;
  try {
    const fieldById = await getById(id);
    res.status(200).json(fieldById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByIdHr;
