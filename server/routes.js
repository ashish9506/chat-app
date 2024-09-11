const express = require("express");
const authRoutes = require("./src/routes/auth");
const router = express.Router();

router.use("/api/auth", authRoutes);

module.exports = router;
