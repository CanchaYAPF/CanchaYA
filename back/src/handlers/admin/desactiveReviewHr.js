const desactiveReview = require("../../controllers/admin/desactiveReview")
const desactiveReviewHr =async (req,res)=>{
 const{id}= req.params
 try {
    const response = await desactiveReview(id)
    res.status(200).json(response)
 } catch (error) {
    res.status(400).send({error:error.message})
 }
}
module.exports= desactiveReviewHr