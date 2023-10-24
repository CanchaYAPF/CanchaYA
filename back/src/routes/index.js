const userRouter = require("./userRouter");
const fieldRouter = require("./fieldRouter");
const bookingRouter = require("./bookingRouter");
const reviewRouter = require("./reviewRouter");
const sportsRouter = require("./sportsRouter");
const favoriteRouter = require("./favoriteRouter");
const mercadoPagoRouter = require("./mpRoutes");
const adminRouter= require("./adminRouter");

module.exports = {
  userRouter,
  fieldRouter,
  bookingRouter,
  reviewRouter,
  sportsRouter,
  favoriteRouter,
  mercadoPagoRouter,
  adminRouter
};
