const createReviewController = require("../../controllers/reviewControllers/postReviewController")

const postReviewHandler = async (req, res) => {

    const {id, description, rate} = req.body;

    try {const result = await createReviewController( description, rate);
        res.status(200).json(result);
    }
    
    catch(error) {res.status(400).json({error: error.message})};
    
    };
    
    module.exports = postReviewHandler;