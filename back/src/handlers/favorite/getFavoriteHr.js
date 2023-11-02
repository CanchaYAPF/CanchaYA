const getAllFavs = require("../../controllers/favorite/getFavorite");

const getFavsHr = async (req, res) => {
  const { id } = req.params;
  try {
    const allFavs = await getAllFavs(id);
    res.status(200).json(allFavs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getFavsHr;
