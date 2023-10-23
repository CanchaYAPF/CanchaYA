const { Router } = require("express");
const {getAllUserHr,deleteUserHr,modifyUserHr}= require("../handlers")

const adminRouter=Router();

adminRouter.get("/", getAllUserHr)
adminRouter.delete("/",deleteUserHr)
adminRouter.patch("/:id",modifyUserHr)

module.exports = adminRouter;