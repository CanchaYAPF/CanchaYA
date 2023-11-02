const desactiveField =  require ("./Fields/desactiveField");
const editField= require("./Fields/editField");
const getAllFields= require("./Fields/getFields");
const deleteUser= require("./User/deleteUser");
const desactiveUser= require("./User/desactiveUser");
const editUser= require("./User/editUser");
const editBooking = require("./Bookings/editBooking");
const getAllBooking = require("./Bookings/getAllBooking")


module.exports={ 
    desactiveField ,
    editField,
    getAllFields,
    deleteUser, 
    desactiveUser,
    editUser,
    editBooking,
    getAllBooking
}