const { postSignUpHr, postLoginHr, postGoogleLoginHr, getUserProfile } = require("../handlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleLogin", postGoogleLoginHr);
userRouter.get("/profile", getUserProfile);

module.exports = userRouter;