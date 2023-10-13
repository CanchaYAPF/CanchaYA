const { postSignUpHr } = require("../handlers/userHandlers/postSignUpHr");
const { Router } = require("express");

const userRouter = Router();
userRouter.post('/signup',postSignUpHr);



module.exports = userRouter;
