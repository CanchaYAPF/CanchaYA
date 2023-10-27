const desactiveUser=require("../../controllers/admin/desactiveUser")
const desactiveUserHr = async (req,res) =>{
    const {id} = req.params
   try {
    const response= await desactiveUser(id)
    res.status(200).json(response)
   } catch (error) {
    res.status(400).send({error:error.message})
   }
}
module.exports = desactiveUserHr