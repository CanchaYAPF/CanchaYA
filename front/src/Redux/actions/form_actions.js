export const CREATE_BOOKING = 'CREATE_BOOKING';
export const GET_BOOKING = 'GET_BOOKING';
export const CREATE_FIELD = 'CREATE_FIELD';
export const GET_FIELD = 'GET_FIELD';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const GET_REVIEW = 'GET_REVIEW';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_SIGNUP = 'USER_SIGNUP';

export function createBooking(data) {
  return { type: CREATE_BOOKING, data };
}

export function getBooking(data) {
  return { type: GET_BOOKING, data };
}

export function createField(data) {
  return { type: CREATE_FIELD, data };
}

export function getField(data) {
  return { type: GET_FIELD, data };
}

export function createReview(data) {
  return { type: CREATE_REVIEW, data };
}

export function getReview(data) {
  return { type: GET_REVIEW, data };
}

export function userLogin(data) {
  return { type: USER_LOGIN, data };
}

export function userSignup(data) {
  return { type: USER_SIGNUP, data };
}