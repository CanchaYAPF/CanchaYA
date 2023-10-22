const deleteFavorite = require("../../controllers/favorite/deleteFavorite");

const deleteFavoriteHr = async (req, res) => {
  const {token,idsFields } = req.body;
  try {
    
    const delField = await deleteFavorite(
      token,
      idsFields,
      
    );
    res.status(200).json(delField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavoriteHr;
