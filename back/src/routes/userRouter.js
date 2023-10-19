const { postSignUpHr, postLoginHr, postGoogleSingUpHr } = require("../handlers");
const { Router } = require("express");


const userRouter = Router();
userRouter.post("/signup", postSignUpHr);
userRouter.post("/login", postLoginHr);
userRouter.post("/googleSingup",postGoogleSingUpHr)
userRouter.post("/prueba",(req,res)=>{
    const {token}  = req.body;
  
    try {
        const response = token;
        console.log("token: ", token )
        res.status(201).json(response);
      } catch (error) {
        res.status(404).json({ error: error.message });
      }
})


module.exports = userRouter;
