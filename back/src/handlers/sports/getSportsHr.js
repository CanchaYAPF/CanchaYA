const getAllSports = require("../../controllers/sports/getSports");

const getSportsHr = async (req, res) => {
  try {
    const allSports = await getAllSports();
    res.status(200).json(allSports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getSportsHr;
