const deleteUser = require("../../controllers/admin/deleteUser")

const deleteUserHr = async (req, res) => {
    const {id}=req.body
    try {
      const response = await deleteUser(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  module.exports =deleteUserHr;