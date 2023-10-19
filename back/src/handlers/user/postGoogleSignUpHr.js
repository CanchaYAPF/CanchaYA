const googleLogin= require("../../controllers/user/googleLogin")

const postGoogleSignUpHr = async (req, res) => {
  const { token } = req.body;
  try {
    const response = await googleLogin(token);
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postGoogleSignUpHr;