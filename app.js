var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//ログインとログアウトを追加
var loginRouter = require('./routes/login');
var idchangeRouter = require('./routes/idchange');
var addRouter = require('./routes/add');
var logoutRouter = require('./routes/logout');
var questRouter = require('./routes/quest');


var app = express();

//connect-mongoの読み込み
// var MongoStore = require('connect-mongo');
// var session = require('express-session');

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));


app.use(session({
  secret: 'secret',
  resave: false,
  store: new MongoStore({ url: 'mongodb://localhost/sample-login' }),
  saveUninitialized: false,
  cookie:{
  httpOnly: true,
  secure: false,
  maxage: 1000 * 60 * 30
  }
})); 


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/add', addRouter);
app.use('/logout', logoutRouter);
app.use('/quest', questRouter);
app.use('/idchange', idchangeRouter);


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

module.exports = app;
