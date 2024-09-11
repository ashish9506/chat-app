const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {
    timestamps: 1,
  }
);

module.exports = mongoose.model("Users", usersSchema);
