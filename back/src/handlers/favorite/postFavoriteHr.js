const postFavorite = require("../../controllers/favorite/postFavorite");

const postFavoritedHr = async (req, res) => {
  const {token,idsFields } = req.body;
  try {
    
    const newField = await postFavorite(
      token,
      idsFields,
      
    );
    res.status(200).json(newField);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFavoritedHr;
