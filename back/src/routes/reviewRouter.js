const { Router } = require("express");
const getReviewsHandler = require ("../handlers/reviewHandlers/getReviewsHandler")
const postReviewHander = require ("../handlers/reviewHandlers/postReviewHander")

const reviewRouter = Router();

reviewRouter.get("/", getReviewsHandler);
reviewRouter.post("/", postReviewHander);

module.exports = reviewRouter;
