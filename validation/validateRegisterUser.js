const isEmail = require("./isEmail");
const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const error = {};
  const name = data.name ? data.name.trim() : "";
  const email = data.email ? data.email.trim() : "";
  const password = data.password ? data.password.trim() : "";

  if (name.length < 3 || name.length > 50) error.name = "Name must be between 3 and 50 characters!";
  if (isEmpty(name)) error.name = "Name is required!";
  if (!isEmail(email)) error.email = "Email is invalid!";
  if (isEmpty(email)) error.email = "Email is required!";
  if (password.length < 8) error.password = "Password must be at least 8 characters!";
  if (isEmpty(password)) error.password = "Password is required!";

  return error;
};
