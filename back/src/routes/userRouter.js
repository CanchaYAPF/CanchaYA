const { postSignUpHr, postLoginHr, postGoogleLoginHr, getUserProfileHr  } = require("../handlers");
const authAdmin = require("../middlewares/authAdmin")
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleLogin", postGoogleLoginHr);
userRouter.get("/profile", authAdmin, getUserProfileHr);

module.exports = userRouter;