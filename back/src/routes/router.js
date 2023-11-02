const { Router } = require("express");
const {
  userRouter,
  fieldRouter,
  bookingRouter,
  reviewRouter,
  sportsRouter,
  favoriteRouter,
  mercadoPagoRouter,
  adminRouter,
  recoveryRouter 
} = require("./index");

const router = Router();
router.use("/payment", mercadoPagoRouter);
router.use("/user", userRouter);
router.use("/field", fieldRouter);
router.use("/booking", bookingRouter);
router.use("/reviews", reviewRouter);
router.use("/sports", sportsRouter);
router.use("/favorite", favoriteRouter);
router.use("/admin", adminRouter);
router.use("/recovery", recoveryRouter); 

module.exports = router;
