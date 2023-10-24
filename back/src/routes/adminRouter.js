const { Router } = require("express");
const {getAllUserHr,deleteUserHr,editUserHr}= require("../handlers/index")
const authAdmin= require("../middlewares/authAdmin")

const adminRouter=Router();

adminRouter.get("/", authAdmin, getAllUserHr)
adminRouter.delete("/",authAdmin, deleteUserHr)
adminRouter.put("/:id", authAdmin,editUserHr)

module.exports = adminRouter;