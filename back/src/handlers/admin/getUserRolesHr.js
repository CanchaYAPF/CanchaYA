const getUserRole = require("../../controllers/admin/getUserRole")
const getUserRolesHr= async (req,res)=>{
    const bearerHeader = req.headers['authorization'];
    let token= bearerHeader.split(' ')[1]
try {
    const response=await getUserRole(token)

    res.status(200).json(response)
} catch (error) {
    res.status(400).json({error:error.message})
}
}
module.exports = getUserRolesHr