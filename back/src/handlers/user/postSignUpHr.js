const signUp = require("../../controllers/user/signUp");

const postSignUpHr = async (req, res) => {
  const { name, lastname, mail, password, birthdate, phone,roles } = req.body;
  try {
    const response = await signUp(name,lastname, mail, password, birthdate, phone,roles);
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = postSignUpHr;
