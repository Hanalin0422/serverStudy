const express = require("express");
const router = express.Router();
//localHost:3000/api/auth
const signinRouter = require("./signin");
const signupRouter = require("./signup");

router.use("/signin", signinRouter);
router.use("/signup", signupRouter);

module.exports = router;