//import 하는 부분. 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//router를 설정해주는 것, 내것에서 필요한 코드를 가져온 것.
var indexRouter = require('./routes/index');

//실제 express 형태를 따라 가겠다고 말하는 것.
var app = express();
//15, 16는 지워도 되는 부분, 우리는 API 서버를 만드는 거니까 HTML을 만들어서 줄 필요가 없음. API는 뷰가 필요 없음.
// view engine setup
//내가 진짜로 동적으로 페이지를 만들어서 페이지를 넘겨줘야 할 경우 사용
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// log를 만드는 얘가 logger. 서버 데이터 담당 부분.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //정적으로 웹사이트 주고 받는 방식
//우리가 설정한 파일을 직접 라우터해주는 코드, url을 우리가 치는 것이 get요청
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// 내가 다른 곳에 있는 내용을 가져와서 사용하고 싶을때 여기에 있는 이코드는 가져와서 쓸수 있다 알려주는 것.
module.exports = app;
