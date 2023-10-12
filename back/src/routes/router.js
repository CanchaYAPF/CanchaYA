const { Router } = require("express");
const userRouter = require("./userRouter");
const fieldRouter = require("./fieldRouter");
const bookingRouter = require("./bookingRouter");
const reviewRouter = require("./reviewRouter");
const sportsRouter = require("./sportsRouter");

const router = Router();

router.use("/user", userRouter);
router.use("/field", fieldRouter);
router.use("/booking", bookingRouter);
router.use("/review", reviewRouter);
router.use("/sports", sportsRouter);

module.exports = router;
