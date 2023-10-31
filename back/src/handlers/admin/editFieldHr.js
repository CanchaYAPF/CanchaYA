const editField = require("../../controllers/admin/editField")


const editFieldHr=async (req,res)=>{
    const {id}=req.params
    const {name,image,sports,phone,address,city,paymentMethod,price,service,shift}=req.body
    
    try {
        const response = editField(id,name,image,sports,phone,address,city,paymentMethod,price,service,shift)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
  
}
module.exports=editFieldHr