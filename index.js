// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use node.js to connect to Treehouse's API to get info to print out

var profile = require("./profile");
var topic = process.argv[2];
var users = process.argv.slice(3);

if (users.length > 0) {
	users.forEach(function(user){
		profile.get(user, topic);
	});
} else {
	console.log("Please type in a topic followed by a username, like this: node index.js <topic> <username1> [, <username2>, ...]");
}