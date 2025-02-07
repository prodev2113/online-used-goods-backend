const isEmpty = require("./isEmpty");

module.exports = (data) => {
  const errors = {};
  const address = data.address ? data.address.trim() : "";
  const country = data.country ? data.country.trim() : "";
  const phone = data.phone ? data.phone.trim() : "";

  if (isEmpty(address)) errors.address = "Address is required!";
  if (isEmpty(country)) errors.country = "Country is required!";
  if (isEmpty(phone)) errors.phone = "Phone is required!";

  return errors;
};