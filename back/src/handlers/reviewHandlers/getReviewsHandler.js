const searchReviews = require("../../controllers/reviewControllers/getReviewsController")

const getReviewsHandler = async (req, res) => {

    
    try{
    const allReviews = await searchReviews()


    res.status(200).json(allReviews);
    } catch(error){
        res.status(400).json({error: error.message})
    }
    };
    
    module.exports = getReviewsHandler;



  