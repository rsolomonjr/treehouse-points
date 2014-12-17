// Print out message
function printMessage(username, badgeCount, points, topic) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + topic + ".";
	console.log(message);
}

// Print out error
function printError(error) {
	console.error(error.message);
}

module.exports.message = printMessage;
module.exports.error = printError;