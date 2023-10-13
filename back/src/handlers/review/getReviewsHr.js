const getReviews = require("../../controllers/review/getReviews");

const getReviewsHr = async (req, res) => {
  try {
    const allReviews = await getReviews();
    res.status(200).json(allReviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getReviewsHr;
