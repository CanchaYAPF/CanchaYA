const { Router } = require("express");
const {getAllUserHr,deleteUserHr,editUserHr,editFieldHr, getFieldsHr, getAllBookingHr, editBookingHr, desactiveUserHr}= require("../handlers/index")
const authAdmin= require("../middlewares/authAdmin");


const adminRouter=Router();
//Usarios:
adminRouter.get("/", authAdmin, getAllUserHr)
adminRouter.delete("/",authAdmin, deleteUserHr)
adminRouter.put("/:id", authAdmin,editUserHr)
adminRouter.patch("/:id",desactiveUserHr)
//Canchas:
adminRouter.get("/fields", getFieldsHr)
adminRouter.put("/fields/:id", editFieldHr)
//Booking:
adminRouter.get("/booking",getAllBookingHr)
adminRouter.put("/booking/:id", editBookingHr)

module.exports = adminRouter;