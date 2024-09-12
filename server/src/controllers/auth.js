const UserModel = require("../models/users");
const { generateHash } = require("../utils/auth");
const { generateToken } = require("../utils/jwt");

exports.signUp = async (req, res, next) => {
  const { email, password, name, gender } = req.body;

  try {
    const dbUser = await UserModel.findOne({ email });

    if (dbUser) {
      const err = new Error("This User is already exist");
      err.statusCode = 400;
      return next(err);
    }

    const hashedPassword = await generateHash(password);
    const user = await UserModel.create({
      email,
      name,
      gender,
      password: hashedPassword,
    });

    return res.send(user);
  } catch (error) {
    return next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      const error = new Error("User doesn't exist");
      error.statusCode = 400;
      return next(error);
    }

    const token = generateToken(user.toJSON());

    res.send({ token, user });
  } catch (error) {
    return next(error);
  }
};
