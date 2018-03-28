let fileSystem = 			require("fs.extra");

// let screenshotDirectory = "screenshots/";


module.exports.referenceError = function () {
	return new Promise(function(resolve, reject) {
		let error = new ReferenceError("Test Reference Error");
		reject("Forced Reference Error" + error);
	})
};

module.exports.takeScreenShot = function() {
	return new Promise(function(resolve, reject) {
		let makePass = true;

		if (makePass) {

			setTimeout(function() {
				resolve();
				return;
			}, 5000)
		}
		else {
			setTimeout(function() {
				let error = new Error("Test Error");
				reject("Forced Error" + error);
				return;
			}, 50000)
		}
	})
};

/*

module.exports.takeScreenShot = function(parameters){

	return new Promise( function(resolve, reject) {
		let screenshotFlag = true;
		let directoryExists = false;

		if(screenshotFlag) {
			try {
				directoryExists = fileSystem.existsSync(screenshotDirectory);
			}
			catch(error) {
				reject(error);
				return;
			}

			if (! directoryExists) {
				try {
					fileSystem.mkdir(screenshotDirectory);
				}
				catch(error) {
					reject(error);
					return;
				}
			}

			browser.takeScreenshot().then(function(png) {
						let outputName = getDateAsString({}) + ".png";
						let stream = fileSystem.createWriteStream(screenshotDirectory + outputName);
						stream.write(new Buffer(png, "base64"));
						stream.end();
						resolve();
						return;
					}).catch(function(error) {
						reject(error);
						return;
					});
		}
		else {
			resolve();
		}
	});
};

*/

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