const express = require('express');
const router = express.Router(); // express에서 필요한 함수 라우터를 호출해 변수 설정

const apiRouter = require('./api/index');

router.use('/api',apiRouter );
router.get("/", (req, res, next) =>{
    res.send("root")
});

module.exports = router; // 방이 있을때 문의 역할을 하는 느낌.