const{Review} =require("../../db")
const getReview = async ()=>{
const allReviews= await Review.findAll()

return allReviews
}
module.exports=getReview