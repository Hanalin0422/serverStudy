//end 포인트, 길의 마지막, 엔드포인트에 왔을때 데이터를 줌.
//단말기도 한자로 보면 끝, 핸드폰을 그래서 어떻게 보면 클라이언트의 끝이라서 엔드포인트라고도 함.
//엔드포인트에서 기능 구현
const express = require("express");
const router = express.Router();
// localHost:3000/api/auth/signin/으로 딱 들어왔을때 함수를 실행하라 라는 코드
// req, res, next는 프레임 워크라 지켜줘야함. next는 반드시 포함은 아님.
router.get("/", (req, res, next) =>{
    res.send("Sign in success");
});

module.exports = router;