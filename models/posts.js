var restful = require('node-restful');
var mongoose = restful.mongoose;

//schema
var postsSchema = new mongoose.Schema({
	busNumber: Number,
	lateness: Number, // 0 on time, 1 early, -1 late
	location: String,
	currentTime: String
})

//return model
module.exports = restful.model('Posts', postsSchema);