const { Router } = require("express");
const {getAllUserHr,deleteUserHr,editUserHr,editFieldHr, getFieldsHr}= require("../handlers/index")
const authAdmin= require("../middlewares/authAdmin");


const adminRouter=Router();
//Usarios:
adminRouter.get("/", authAdmin, getAllUserHr)
adminRouter.delete("/",authAdmin, deleteUserHr)
adminRouter.put("/:id", authAdmin,editUserHr)
//Canchas:
adminRouter.get("/", getFieldsHr)
adminRouter.put("/fields/:id", editFieldHr)

module.exports = adminRouter;