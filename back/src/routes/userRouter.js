const { Router } = require("express");

const userRouter = Router();
const { postSignUpHr } = require("../handlers/userHandlers/postSignUpHr");

userRouter.post('/signup',postSignUpHr);


module.exports = userRouter;
