const { postSignUpHr, postLoginHr, postGoogleLoginHr } = require("../handlers");
const { Router } = require("express");


const userRouter = Router();
userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleLogin", postGoogleLoginHr);


module.exports = userRouter;
