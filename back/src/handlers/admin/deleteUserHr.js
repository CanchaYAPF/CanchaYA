const deleteUser = require("../../controllers/admin/getAllUser")

const deleteUserHr = async (req, res) => {
    const {token,id}=req.body
    try {
      const response = await deleteUser(token,id);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  module.exports =deleteUserHr;