const postReviews = require("../../controllers/review/postReviews");

const postReviewHr = async (req, res) => {
  const { description, rate, FieldId, UserId } = req.body;
  try {
    const result = await postReviews( rate, description, FieldId, UserId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postReviewHr;
