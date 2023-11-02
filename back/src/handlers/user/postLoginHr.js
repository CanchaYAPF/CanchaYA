const login = require("../../controllers/user/login");

const postLoginHr = async (req, res) => {
  const { mail, password } = req.body;
  try {
    const loginResponse = await login(mail, password);
    res.status(200).json(loginResponse); // Cambiado a 200: OK
  } catch (error) {
    const statusCode = error.statusCode || 500; // Si no se define un statusCode, se usa 500: Internal Server Error
    res.status(statusCode).json({ error: error.message });
  }
};

module.exports = postLoginHr;
