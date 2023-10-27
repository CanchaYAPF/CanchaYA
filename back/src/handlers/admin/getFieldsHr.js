const getFields = require("../../controllers/admin/getFields")

const getFieldsHr =async(req,res)=>{
    // const {name}= req.body
try {
    const response= await getFields()
    console.log("response handler: ", response)
    res.status(200).json(response)
} catch (error) {
    res.status(400).send({error: error.message})
}

} 
module.exports = getFieldsHr