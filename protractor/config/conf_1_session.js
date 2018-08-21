var path = process.cwd();

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',

	// set to "custom" instead of cucumber.
	framework: 'custom',

	// path relative to the current config file
	frameworkPath: require.resolve('protractor-cucumber-framework'),

	// require feature files
	specs: [ path + '/features/5featuretest/*.feature' ],

	capabilities: {
		'browserName': 'chrome',
		'loggingPrefs': {'driver': 'INFO', 'browser': 'INFO'},
	},

	cucumberOpts: {
		format: ["json:results.json", `../node_modules/cucumber-pretty`],
		require: [ path + '/step_definitions/**/*.js' ]
	}
};