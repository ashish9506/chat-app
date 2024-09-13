const { hashSync, genSaltSync, compareSync } = require("bcrypt");

exports.generateHash = (password) => {
  return hashSync(password, genSaltSync(8));
};

exports.matchPassword = (password, dbPassword) => {
  return compareSync(password, dbPassword);
};
