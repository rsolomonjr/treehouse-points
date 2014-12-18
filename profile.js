// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use node.js to connect to Treehouse's API to get info to print out

var http = require("http");
var printer = require("./printer");


function getProfile(username, topic) {
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
		// console.log(response.statusCode);
		var body = "";
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			if (response.statusCode === 200) {
				try {
					// Parse the data
					var profile = JSON.parse(body);
					// Print the data
					if (typeof profile.points[topic] !== 'undefined') {
						printer.message(false, profile.name, profile.badges.length, profile.points[topic], topic);
					} else {
						printer.message(true, profile.name, profile.badges.length, profile.points[topic], topic);
					}
					
				} catch(error) {
					// Parse Error
					printer.error(error);
				}
			} else {
				// Status Code error
				printer.error({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
			}
		});
	});

	// Connection Error
	request.on('error', printer.error);
}

module.exports.get = getProfile;