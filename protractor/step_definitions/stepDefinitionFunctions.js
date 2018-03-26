module.exports = {};

module.exports.browser_clearStorage = function(parameters) {

	return new Promise( function(resolve, reject) {
		let functionName = "StepDefinitionFunctions.browser_clearStorage()";
		// Clear Login and Other stored values
		browser.executeScript("window.sessionStorage.clear();")
			.then(function() {
				browser.executeScript("window.localStorage.clear();")
					.then(function () {
						browser.driver.manage().deleteAllCookies()
							.then(function () {
								resolve();
							}).catch(function (error) {
							resolve();
						});
						resolve();
					}).catch(function (error) {
					browser.driver.manage().deleteAllCookies()
						.then(function () {
							resolve();
						}).catch(function (error) {
						resolve();
					});
				})
			}).catch(function(error) {
			browser.executeScript("window.localStorage.clear();")
				.then(function() {
					browser.driver.manage().deleteAllCookies()
						.then(function() {
							resolve();
						}).catch(function (error) {
						resolve();
					});
				}).catch(function(error) {
				browser.driver.manage().deleteAllCookies()
					.then(function() {
						resolve();
					}).catch(function (error) {
					resolve();
				});
			});
		});
	});
};