const getAllUsers = require("../../controllers/admin/getAllUser")

const getAllUserHr = async (req, res) => {
    try {
      const response = await getAllUsers();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  module.exports =getAllUserHr;