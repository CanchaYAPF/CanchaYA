const { postSignUpHr } = require("../handlers");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/", postSignUpHr);

module.exports = userRouter;
