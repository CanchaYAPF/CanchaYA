const {Review,} = require ("../../db")

const createDriver = async ( description, rate) =>{

const newReview = await Review.create({ description, rate});








return newReview



}

module.exports = createDriver