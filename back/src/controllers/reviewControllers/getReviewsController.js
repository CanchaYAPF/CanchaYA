const {Review} = require ("../../db")


const getReviews = async () =>{


const dataBaseDriver = await Review.findAll();

return dataBaseDriver


}

module.exports = getReviews