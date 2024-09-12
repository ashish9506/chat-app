const express = require("express");
const { signUp, login } = require("../controllers/auth");
const { body } = require("express-validator");
const validator = require("../utils/validator");

const router = express.Router();

router.post(
  "/sign-up",
  [
    body("email").exists().isEmail().trim(),
    body("password").exists().isLength({ min: 6, max: 20 }),
    body("name").exists().isLength({ min: 2, max: 20 }).trim(),
    body("gender").exists().isLength({ min: 1, max: 6 }).trim(),
    validator,
  ],
  signUp
);

router.post(
  "/login",
  [
    body("email").exists().isEmail().trim(),
    body("password").exists().isLength({ min: 6, max: 20 }),
    validator,
  ],
  login
);

module.exports = router;
