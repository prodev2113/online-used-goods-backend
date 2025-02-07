const isEmpty = require("./isEmpty");

exports.validateTest = (data) => {
  const error = {};
  const title = data.title ? data.title.trim() : "";
  if (isEmpty(title)) error.title = "Title is required!";
  return error;
};
