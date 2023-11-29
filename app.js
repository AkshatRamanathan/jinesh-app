var express = require('express');
let mustacheExpress = require('mustache-express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
// var dashboardRouter = require('./routes/dashboard');
// var adminRouter = require('./routes/admin');

var app = express();
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());
app.set('views', __dirname + '/views');

app.use(logger('dev'));
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
// app.use('/login', dashboardRouter);
// app.use('/login', adminRouter);

module.exports = app;
