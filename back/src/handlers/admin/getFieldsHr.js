const getAllFields = require("../../controllers/admin/getFields")

const getFieldsHr = async (req, res) => {
  // const {mail}= req.body
    try {
      const response = await getAllFields();
      res.status(200).json(response);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  
  module.exports = getFieldsHr ;