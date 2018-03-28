const stepDefinitionFunctions = require("./stepDefinitionFunctions.js");
const util = require("./util.js");

// Protractor-Cucumber-Framework 4.2.0 setup
const { AfterAll, After, Before, Given, When, Then, setDefaultTimeout } = require('cucumber');

let globalTimeout = 30;
let pageLoadTimeout = 30;
let milliseconds = 1000;

Before(function() {
	setDefaultTimeout(-1);
	browser.ignoreSynchronization = true;
	browser.manage().timeouts().implicitlyWait(globalTimeout * milliseconds);
	browser.manage().timeouts().pageLoadTimeout(pageLoadTimeout * milliseconds);
});

//  What to run after each scenario
After(function () {
	return util.takeScreenShot();
});

//  What to run after each scenario
After(function () {
	return stepDefinitionFunctions.browser_clearStorage();
});

Given('I navigate to google', function() {
	return browser.get("https:/google.com")
});

When('I enter {string} into the search bar', function(text) {
	let search_bar = element(by.id("lst-ib"));
	return search_bar.sendKeys(text);
});

When('I clear the search bar', function() {
	let search_bar = element(by.id("lst-ib"));
	return search_bar.clear();
});

When('I fail on a promise', function() {
	return new Promise(function(resolve, reject) {
		let makePass = false;

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
	})
});

When('I wait for {int} seconds', function(number) {
	return browser.sleep(number * 1000);
});

Then('The element {string} should contain {string}', function(local_element, string) {
	return new Promise(function (resolve, reject) {
		reject("Forced failure")
	})
});

/*
// Protractor-Cucumber-Framework 3.1.0 setup
let stepDefinitionsWrapper = function () {
	let globalTimeout = 30;
	let pageLoadTimeout = 30;
	let milliseconds = 1000;
	this.setDefaultTimeout(globalTimeout * milliseconds);

	this.Before(function(scenario, callback) {
		browser.driver.manage().window().setSize(1280, 960);

		stepDefinitionFunctions.browser_clearStorage({})
			.then(function() {
				callback();
			})
			.then(function(error) {callback(error)});

		browser.ignoreSynchronization = true;
		browser.manage().timeouts().implicitlyWait(globalTimeout * milliseconds);
		browser.manage().timeouts().pageLoadTimeout(pageLoadTimeout * milliseconds);
	});

	//  What to run after each scenario
	this.After(function () {
		return util.takeScreenShot({});
	});

	//  What to run after each scenario
	this.After(function () {
		return stepDefinitionFunctions.browser_clearStorage({});
	});

	// this.After(function () {
	// 	return stepDefinitionFunctions.browser_clearStorage({})
	// 		.then(function() {
	// 			return util.takeScreenShot({})
	// 		})
	// 		.catch(function(error) {
	//
	// 		})
	// });

	this.Given(/^I navigate to google$/, function() {
		return browser.get("https:/google.com")
	});

	this.When(/^I enter "((?:[^"\\]|\\.)*)" into the search bar$/, function(text) {
		let search_bar = element(by.id("lst-ib"));
		return search_bar.sendKeys(text);
	});

	this.When(/^I clear the search bar$/, function() {
		let search_bar = element(by.id("lst-ib"));
		return search_bar.clear();
	});

	this.When(/^I wait for (\d+) seconds$/, function(number) {
		return browser.sleep(number * 1000);
	});

	this.Then(/^The element "((?:[^"\\]|\\.)*)" should contain "((?:[^"\\]|\\.)*)"$/, function(local_element, string) {
		return new Promise(function (resolve, reject) {
			reject("Forced failure")
		})
	});
};

module.exports = stepDefinitionsWrapper;
*/