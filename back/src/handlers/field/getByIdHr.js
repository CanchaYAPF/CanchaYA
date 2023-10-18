const getById = require("../../controllers/field/getById");

const getByIdHr = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  try {
    const fieldById = await getById(id, source);
    res.status(200).json(fieldById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getByIdHr;
