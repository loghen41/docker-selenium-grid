module.exports = {};

module.exports.browser_clearStorage = function() {

	return new Promise( function(resolve, reject) {
		let makePass = true;

		if (makePass) {

			setTimeout(function() {
				resolve();
				return;
			}, 3000)
		}
		else {
			setTimeout(function() {
				let error = new Error("Test Error");
				reject("Forced Error" + error);
				return;
			}, 3000)
		}
	});
};