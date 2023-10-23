const jwt=require('jsonwebtoken');

const auth=(req,res,next)=>{
 const bearerHeader = req.headers['authorization'];
 
if(!bearerHeader) {
    res.status(401).json({msg:"Acceso no autorizado"});
}else{
   let token= bearerHeader.split(' ')[1]
   
   jwt.verify(token,"secretKey",(err)=>{//secrettoke al env
    if(err){
        res.status(403).json({msg:"No tiene los permisos de acceso necesarios"});
    }else{
    next()
}
   })
}
}
module.exports ={auth}
