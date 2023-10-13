const { Router } = require("express");

const userRouter = Router();
const {postSignUpHandler}=require('../handlers/userHandlers/postSignUpHandler.js')


userRouter.post('/signup',postSignUpHandler);


module.exports = userRouter;
