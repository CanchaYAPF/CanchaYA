const { getBookingHr, postBookingHr } = require("../handlers");
const { Router } = require("express");

const bookingRouter = Router();

bookingRouter.get("/", getBookingHr);
bookingRouter.post("/", postBookingHr);

module.exports = bookingRouter;
