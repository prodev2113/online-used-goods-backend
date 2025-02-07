const isEmail = require("./isEmail");
const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const errors = {};
  const email = data.email ? data.email.trim() : "";
  const password = data.password ? data.password.trim() : "";

  if (!isEmail(email)) errors.email = "Email is invalid!";
  if (isEmpty(email)) errors.email = "Email is required!";
  if (isEmpty(password)) errors.password = "Password is required!";

  return errors;
};
