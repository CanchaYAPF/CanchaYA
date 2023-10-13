const { Router } = require("express");
const {
  userRouter,
  fieldRouter,
  bookingRouter,
  reviewRouter,
  sportsRouter,
} = require("./index");

const router = Router();

router.use("/user", userRouter);
router.use("/field", fieldRouter);
router.use("/booking", bookingRouter);
router.use("/review", reviewRouter);
router.use("/sports", sportsRouter);

module.exports = router;
