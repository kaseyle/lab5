var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var name = req.query.name;
	var desc = req.query.description;
	var friend = {
		"name": name,
		"description": desc,
		"imageURL": "http://lorempixel.com/400/400/people"
	} 
	console.log(friend);
	data["friends"].push(friend);
	res.render('add', data);
 }