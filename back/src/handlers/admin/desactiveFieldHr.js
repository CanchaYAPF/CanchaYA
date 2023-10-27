const desactiveField=require("../../controllers/admin/desactiveField")
const desactiveFieldHr = async (req,res) =>{
    const {id} = req.params
   try {
    const response= await desactiveField(id)
    res.status(200).json(response)
   } catch (error) {
    res.status(400).send({error:error.message})
   }
}
module.exports = desactiveFieldHr