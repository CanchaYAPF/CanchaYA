const postSignUpHr = require("../handlers/user/postSignUpHr");
const postLoginHr = require("../handlers/user/postLoginHr")
const { Router } = require("express");

const userRouter = Router();
userRouter.post("/signup", postSignUpHr);
userRouter.post('/login',postLoginHr);

module.exports = userRouter;
