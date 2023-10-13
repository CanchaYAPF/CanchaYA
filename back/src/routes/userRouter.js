const { postSignUpHr } = require("../handlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", postSignUpHr);

module.exports = userRouter;
