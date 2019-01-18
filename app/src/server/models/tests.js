var mongoose = require('mongoose');

var schema = {
		project: String,
		task: String,
		description: String,
		status: String,
		startTime: Date,
		endTime: Date,
		duration: String
}

var Tests = mongoose.model("Tests", schema);

module.exports = Tests;