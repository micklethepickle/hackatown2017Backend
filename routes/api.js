//dependencies
var express = require('express');
var router = express.Router();

//models
var Posts = require('../models/posts');

//routes
Posts.methods(['get', 'put', 'post', 'delete']);
Posts.register(router, '/posts');

//return router
module.exports = router;