const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) =>{
    res.send("Sign up in Success")
});

module.exports = router;