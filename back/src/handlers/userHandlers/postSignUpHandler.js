const {signUpController}= require('../../controllers/userControllers/signUpController')

const postSignUpHandler = async(req,res)=>{
    const{name,mail,password}=req.body
    try {
       const response= await signUpController(name,mail,password)
       res.status(201).json(response)
    } catch (error) {
        res.status(404).json({ error: error.message }) 
    }
}
module.exports={postSignUpHandler}