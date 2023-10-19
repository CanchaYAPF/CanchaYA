const googleSignUp = require("../../controllers/user/googleSignUp");

const postGoogleSignUpHr = async (req, res) => {
  const { name,lastname,mail } = req.body;
  try {
    const response = await googleSignUp(name,lastname,mail);
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postGoogleSignUpHr;