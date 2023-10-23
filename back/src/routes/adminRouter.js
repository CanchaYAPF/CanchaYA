const { Router } = require("express");
const {getAllUserHr,deleteUserHr}= require("../handlers")

const adminRouter=Router();

adminRouter.get("/", getAllUserHr)
adminRouter.delete("/",deleteUserHr)

module.exports = adminRouter;