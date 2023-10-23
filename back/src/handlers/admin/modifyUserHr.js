const modifyUser= require("../../controllers/admin/modifyUser")

const modifyUserHr=(req,res)=>{
    const {id}=req.params
    const{prop}=req.body
    try {
        const response=modifyUser(id,prop)
        res.status(200).json(response);
      } catch (error) {
        res.status(400).send({ error: error.message });
      }

}
module.exports=modifyUserHr