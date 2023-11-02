const { postSignUpHr, postLoginHr, postGoogleLoginHr, getUserProfile, editUserHr } = require("../handlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleLogin", postGoogleLoginHr);
userRouter.get("/profile", getUserProfile);
userRouter.patch("/admin/:id", editUserHr); 

module.exports = userRouter;