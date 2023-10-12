const { Router } = require("express");
const postBooking = require("../handlers/bookingHandlers/bookingPostHandlers");
const getAllBooking = require ("../handlers/bookingHandlers/bookingHandlers") 

const bookingRouter = Router();

bookingRouter.post("/", postBooking)
bookingRouter.get("/", getAllBooking)


module.exports = bookingRouter;
