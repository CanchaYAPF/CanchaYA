const { getBookingHr, postBookingHr, updateBookingHr } = require("../handlers");
const { Router } = require("express");

const bookingRouter = Router();

bookingRouter.get("/", getBookingHr);
bookingRouter.post("/", postBookingHr);
bookingRouter.put("/:params", updateBookingHr);

module.exports = bookingRouter;
