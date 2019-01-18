var mongoose = require('mongoose'),
	dbname = "testData";

var Tests = mongoose.model("Tests", {
		project: String,
		task: String,
		description: String,
		status: String,
		startTime: Date,
		endTime: Date,
		duration: String
});

mongoose.connect("mongodb://localhost/" + dbname);


var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteTests);

function deleteTests(){
	Tests.remove({}, function(err){
		if(err) console.log(err);
		insertTests();
	});
}

function insertTests(){

Tests.create(
		{
		project: "Project-1",
		task: "Task1",
		description: "Task to test connectivity",
		status: "COMPLETE",
		startTime: "01-16-2019 16:26:31",
		endTime: "01-16-2019 17:00:29",
		duration: "00:26:42"

		},
		{
		name: "Project-1",
		task: "Task2",
		description: "Task to test input validations",
		status: "COMPLETE",
		startTime: "01-16-2019 16:26:31",
		endTime: "01-16-2019 17:00:29",
		duration: "00:26:42"
		},
		{
		name: "Project-2",
		task: "Task1",
		description: "Task to test error validations",
		status: "COMPLETE",
		startTime: "01-16-2019 17:26:31",
		endTime: "01-16-2019 18:00:29",
		duration: "00:26:42"
		}

	);

	/*

	db.mytable.insert({Project: "Project-1", Task: "Task1", Description: "Task to test connectivity", STATUS: "COMPLETE", startTime: "01-16-2019 16:26:31", endTime: "01-16-2019 17:00:29", Duration: "00:26:42"})
WriteResult({ "nInserted" : 1 })
> db.mytable.insert({Project: "Project-1", Task: "Task2", Description: "Task to test input validationns", STATUS: "COMPLETE", startTime: "01-16-2019 16:26:31", endTime: "01-16-2019 17:00:29", Duration: "00:26:42"})
WriteResult({ "nInserted" : 1 })
> db.mytable.insert({Project: "Project-2", Task: "Task1", Description: "Task to test error validationns", STATUS: "COMPLETE", startTime: "01-16-2019 17:26:31", endTime: "01-16-2019 18:00:29", Duration: "00:26:42"})


	tests.save(function(err){
		if(err) console.log(err);
	});*/

}