const { postSignUpHr, postLoginHr, postGoogleSingUpHr } = require("../handlers");
const { Router } = require("express");


const userRouter = Router();
userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleSingup",postGoogleSingUpHr)



module.exports = userRouter;
