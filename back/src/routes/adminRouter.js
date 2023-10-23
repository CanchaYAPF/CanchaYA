const { Router } = require("express");
const {getAllUserHr,deleteUserHr}= require("../handlers")
const authAdmin= require("../middlewares/authAdmin")

const adminRouter=Router();

adminRouter.get("/", authAdmin, getAllUserHr)
adminRouter.delete("/",authAdmin, deleteUserHr)

module.exports = adminRouter;