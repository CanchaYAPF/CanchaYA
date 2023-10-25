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
const editUserHr = require("./admin/editUsersHr");
const getFieldsHr = require("./admin/getFieldsHr")
const editFieldHr = require("./admin/editFieldHr");

module.exports = {
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
  getFieldsHr
};