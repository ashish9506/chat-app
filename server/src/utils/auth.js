const { hashSync, genSaltSync } = require("bcrypt");

exports.generateHash = (password) => {
  return hashSync(password, genSaltSync(8));
};
