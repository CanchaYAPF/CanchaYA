const login = require("../../controllers/user/login");

const postLoginHr = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const loginResponse = await login(mail, password);
    res.status(201).json(loginResponse);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = postLoginHr;
