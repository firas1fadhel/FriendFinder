// Require the modules and dependecies
var friends = require('../data/friends.js');
var path = require('path');
//create a function to export the paths and api routes
modules.exports =function(app){

	app.get('/api/friends',function(req,res){

		res.json('friends');
	});

	//A POST route /api/friends. This will be used to 
// handle incoming survey results. This route will
// also be used to handle the compatibility logic
app.post('/api/friends',function(req,res){
	// Create variables to calculate point difference
	// Best match at any point in the calculation will 
	// be stored in this object

	var bestMatch = {
		name: "",
		image: "",
		matchPoints: 1000
	};

	var userName = req.body.name;
	var userImage = req.body.image;
	var userPoints = req.body.points;
	var pointDifference = 0;

})
}
