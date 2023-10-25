const getAllUsers = require("../../controllers/admin/getAllUser")

const getAllUserHr = async (req, res) => {
  const {mail}= req.body
    try {
      const response = await getAllUsers(mail);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  module.exports =getAllUserHr;