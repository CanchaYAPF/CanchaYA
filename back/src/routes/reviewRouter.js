const { getReviewsHr, postReviewsHr } = require("../handlers");
const { Router } = require("express");

const reviewRouter = Router();

reviewRouter.get("/", getReviewsHr);
reviewRouter.post("/", postReviewsHr);

module.exports = reviewRouter;
