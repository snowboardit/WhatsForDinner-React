var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var logger = require('morgan');
var { Food } = require('./model/food');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/**
 *  ROUTES
 */

// Get food data
app.get("/food", async (req, res) => {

  // TODO - make sure partially completed objects don't blow up the program

  // Connect to Notion API and retrieve food list
  const food = new Food();
  const food_list = await food.getFood();

  // Get timestamp and log it
  const timestamp = new Date(Date.now());

  // Return food list
  console.log(`timestamp: ${timestamp}`);
  console.log(food_list);
  res.json({ data: food_list });

})


/**
 *  MIDDLEWARE
 */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
