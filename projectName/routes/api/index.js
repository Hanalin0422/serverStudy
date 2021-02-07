const express = require("express");
const router = express.Router();
//localHost:3000/api/까지 옴. auth로 보내야 함
//localHost:3000/api/ -> board로도 보내야함.

const authRouter = require('./auth/index');
const boardRouter = require('./board');

router.use("/auth", authRouter);
router.use("/board", boardRouter);

module.exports = router;