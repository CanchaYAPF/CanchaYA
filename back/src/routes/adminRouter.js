const { Router } = require("express");
const {getAllUserHr,deleteUserHr,editUserHr,editFieldHr, getAllBookingHr, editBookingHr, desactiveUserHr, desactiveFieldHr, getUserRoleHr,getReviewHr,desactiveReviewHr}= require("../handlers/index")
const authAdmin= require("../middlewares/authAdmin");


const adminRouter=Router();
//Usarios:
adminRouter.get("/roles",getUserRoleHr)
adminRouter.get("/",authAdmin, getAllUserHr)
adminRouter.delete("/",deleteUserHr)
adminRouter.put("/:id", editUserHr)
adminRouter.patch("/desactive/:id",authAdmin,desactiveUserHr)
//Canchas:
adminRouter.put("/fields/:id", editFieldHr)
adminRouter.patch("/fields/:id",desactiveFieldHr)

//Booking:
adminRouter.get("/booking",getAllBookingHr)
adminRouter.put("/booking/:id", editBookingHr)
//Review:
adminRouter.get("/review",getReviewHr)
adminRouter.patch("/review/:id",desactiveReviewHr)

module.exports = adminRouter;