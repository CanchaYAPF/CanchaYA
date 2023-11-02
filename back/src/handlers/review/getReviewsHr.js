const getReviews = require("../../controllers/review/getReviews");

const getReviewsHr = async (req, res) => {
  const { id } = req.params;
  try {
    const allReviews = await getReviews(id );
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getReviewsHr;
