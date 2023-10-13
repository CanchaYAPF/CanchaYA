const postReviews = require("../../controllers/review/postReviews");

const postReviewHr = async (req, res) => {
  const { description, rate } = req.body;
  try {
    const result = await postReviews(description, rate);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postReviewHr;
