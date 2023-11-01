const{Review,User,Field} =require("../../db")
const getReview = async ()=>{
const allReviews= await Review.findAll({
    include:[{
        model:User,
        attributes:['mail'],
        require:true
    },{
        model:Field,
        attributes:['name'],
        require: true
    }]
})
const reviewsFormat = await 
    allReviews?.map(review =>{
        return {
            id:review.id,
            rate:review.rate,
            description:review.description,
            approved:review.approved,
            user:review.User.mail,
            field:review.Field.name
        }
    })

return reviewsFormat

}
module.exports=getReview