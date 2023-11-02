const getBookingHr = require("./booking/getBookingHr");
const postBookingHr = require("./booking/postBookingHr");
const allFieldsHr = require("./field/allFieldsHr");
const getByIdHr = require("./field/getByIdHr");
const getByNameHr = require("./field/getByNameHr");
const postFieldHr = require("./field/postFieldHr");
const getReviewsHr = require("./review/getReviewsHr");
const postReviewsHr = require("./review/postReviewsHr");
const getSportsHr = require("./sports/getSportsHr");
const postSignUpHr = require("./user/postSignUpHr");
const postLoginHr = require("./user/postLoginHr");
const postGoogleLoginHr = require("./user/postGoogleLoginHr");
const getUserProfile = require("./user/getUserProfile");
const getAllUserHr = require("./admin/getAllUserHr");
const deleteUserHr = require("./admin/deleteUserHr");
const desactiveUserHr = require("./admin/desactiveUserHr")
const desactiveFieldHr = require("./admin/desactiveFieldHr")
const editUserHr = require("./admin/editUsersHr");
const editFieldHr = require("./admin/editFieldHr");
const getAllBookingHr= require("./admin/getAllBookingHr");
const editBookingHr= require("./admin/editBookingHr");
const getUserRoleHr = require("./admin/getUserRolesHr")
const getReviewHr = require("./admin/getReviewsHr");
const desactiveReviewHr = require("./admin/desactiveReviewHr");
const updateBookingHr = require("./booking/updateBooking");
const getFieldsHr = require("./admin/getFieldsHr")

module.exports = {
  updateBookingHr,
  getBookingHr,
  postBookingHr,
  allFieldsHr,
  getByIdHr,
  getByNameHr,
  postFieldHr,
  getReviewsHr,
  postReviewsHr,
  getSportsHr,
  postSignUpHr,
  postLoginHr,
  postGoogleLoginHr,
  getUserProfile,
  getAllUserHr,
  deleteUserHr,
  editUserHr,
  editFieldHr,
  getAllBookingHr,
  editBookingHr,
  desactiveUserHr,
  desactiveFieldHr,
  getUserRoleHr,
  getReviewHr,
  desactiveReviewHr,
  getFieldsHr
};

