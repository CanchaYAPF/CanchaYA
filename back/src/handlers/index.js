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
};
