var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongo
mongoose.connect('mongodb://localhost/rest_test');

//express
var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/api'));

//start server
app.listen(3000);
console.log('API IS RUNNING ON 3000');