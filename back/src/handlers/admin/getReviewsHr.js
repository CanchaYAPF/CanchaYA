const getReview= require("../../controllers/admin/getReview")
const getReviewHr = async (req,res)=>{
try {
    const response = await getReview()
    res.status(200).json(response)
} catch (error) {
    res.status(400).json({error:error.message})
}
}
module.exports = getReviewHr