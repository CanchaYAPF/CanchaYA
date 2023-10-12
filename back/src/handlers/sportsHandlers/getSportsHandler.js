const getAllSports = require("../../controllers/sportsControllers/getSportsController")

const getReviewsHandler = async (req, res) => {

    
    try{
    const allSports = await getAllSports()


    res.status(200).json(allSports);
    } catch(error){
        res.status(400).json({error: error.message})
    }
    };
    
    module.exports = getReviewsHandler;



  