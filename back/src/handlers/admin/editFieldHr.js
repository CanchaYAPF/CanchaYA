const editField = require('../../controllers/admin/editField');

const editFieldHr = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const response = await editField(id, data);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

module.exports = editFieldHr;