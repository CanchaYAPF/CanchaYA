const { Router } = require("express");
const {getAllUserHr,deleteUserHr,editUserHr,editFieldHr, getAllBookingHr, editBookingHr, desactiveUserHr, desactiveFieldHr, getUserRoleHr,getReviewHr}= require("../handlers/index")
const authAdmin= require("../middlewares/authAdmin");


const adminRouter=Router();
//Usarios:
adminRouter.get("/roles",getUserRoleHr)
adminRouter.get("/", authAdmin, getAllUserHr)
adminRouter.delete("/",authAdmin, deleteUserHr)
adminRouter.put("/:id", authAdmin,editUserHr)
adminRouter.patch("/desactive/:id", desactiveUserHr)
//Canchas:
adminRouter.put("/fields/:id", editFieldHr)
adminRouter.patch("/fields/:id",desactiveFieldHr)
//Booking:
adminRouter.get("/booking",getAllBookingHr)
adminRouter.put("/booking/:id", editBookingHr)
//Review:
adminRouter.get("/review",getReviewHr)

module.exports = adminRouter;