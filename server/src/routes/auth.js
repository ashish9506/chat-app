const express = require("express");
const { auth } = require("../controllers/auth");

const router = express.Router();

router.get("/", auth);
router.post("/", auth);

module.exports = router;
