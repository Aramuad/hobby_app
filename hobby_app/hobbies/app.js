var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var radness = require('./routes/radness');
var routes = require('./routes')
var mehtodOverride = require('method-override');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/radness');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(mehtodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/radness', radness);

var app = express()

// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
err.status = 404;
next(err);
});

// error handler
if (app.get('env') === 'development') {
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(err.status|| 500);
  res.render('error', {
    message: err.message,
    error: err
    });
  });
}

module.exports = app;
