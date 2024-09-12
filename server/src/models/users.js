const { Schema, model } = require("mongoose");

const usersSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    name: String,
    password: { type: String, required: true },
    gender: String,
  },
  {
    timestamps: true, // Enable timestamps
  }
);

usersSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    const newRes = { ...result };
    newRes.id = newRes._id;
    delete newRes._id;
    delete newRes.__v;
    delete newRes.password;
    return newRes;
  }
});

module.exports = model("Users", usersSchema);
