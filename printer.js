// Print out message
function printMessage(failed, username, badgeCount, points, topic) {
	var message = "";
	if (!failed) {
		var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in " + topic + ".";
	} else {
		var message = "Treehouse doesn't offer a course for " + topic + " yet."
	}
	console.log(message);
}

// Print out error
function printError(error) {
	console.error(error.message);
}

module.exports.message = printMessage;
module.exports.error = printError;