const { Before, Given, When, Then, setDefaultTimeout } = require('cucumber');

let globalTimeout = 30;
let pageLoadTimeout = 30;
let milliseconds = 1000;

Before(function() {
	setDefaultTimeout(-1);
	browser.ignoreSynchronization = true;
	browser.manage().timeouts().implicitlyWait(globalTimeout * milliseconds);
	browser.manage().timeouts().pageLoadTimeout(pageLoadTimeout * milliseconds);
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

When('I wait for {int} seconds', function(number) {
	return browser.sleep(number * 1000);
});

Then('The element {element} should contain {string}', function(local_element, string) {
	let found_element = element(by.id(local_element));
	found_element.getText();
	return found_element.indexOf(string) !== -1
});
