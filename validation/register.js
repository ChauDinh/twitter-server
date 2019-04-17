const Validator = require("validator");

module.exports = function(data) {
  let errors = {};
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.password = 'Password must has length between 6 and 32 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required'
  }

  if (!Validator.isLength(data.username, { min: 4, max: 12 })) {
    errors.username = 'Username must has length between 4 and 12 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password is required'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Confirm password must match'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}