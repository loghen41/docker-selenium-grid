let fileSystem = 			require("fs.extra");

// let screenshotDirectory = "screenshots/";

module.exports.takeScreenShot = function(parameters){

	return new Promise( function(resolve, reject) {
		let screenshotFlag = true;

		if(screenshotFlag) {
			// Create Directory
			let onDirectoryCheck = function(exists) {
				let takeScreenshot = function() {
					browser.takeScreenshot().then(function(png) {
						let outputName = getDateAsString({}) + ".png";
						let stream = fileSystem.createWriteStream(screenshotDirectory + outputName);
						stream.write(new Buffer(png, "base64"));
						stream.end();
						resolve();
					}).catch(function() {
						reject();
					});
				};
				if(exists === false) {
					fileSystem.mkdir(screenshotDirectory, takeScreenshot);
				}
				else {
					takeScreenshot();
				}
			};
			fileSystem.exists(screenshotDirectory, onDirectoryCheck);
		}
		else {
			resolve();
		}
	});
};

function getDateAsString(parameters) {
	let date = new Date();
	let result = "" + date.getFullYear();
	result = result + ".";
	result = result + padZeros({ startNumber: date.getMonth(), totalDigits: 2 });
	result = result + ".";
	result = result + padZeros({ startNumber: date.getDate(), totalDigits: 2 });
	result = result + "_";
	result = result + padZeros({ startNumber: date.getHours(), totalDigits: 2 });
	result = result + ".";
	result = result + padZeros({ startNumber: date.getMinutes(), totalDigits: 2 });
	result = result + ".";
	result = result + padZeros({ startNumber: date.getSeconds(), totalDigits: 2 });
	result = result + "_";
	result = result + padZeros({ startNumber: date.getMilliseconds(), totalDigits: 3 });
	return result;
}

function padZeros(parameters) {
	let result = parameters.startNumber.toString();
	while(result.length < parameters.totalDigits) {
		result = "0" + result;
	}
	return result;
}