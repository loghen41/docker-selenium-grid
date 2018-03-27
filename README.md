**Docker Selenium Grid Tester**

This is a repo specifically to be used for testing the docker selenium grid with multiple testing frameworks. Particularly this test suite is designed to have multiple instances run at the same time to purposefully put extra load on the built grid. 

As such there is many different types of conf files for protractor to start multiple types of test configuration.

**Instructions to run:**

Installation Dependencies:
Docker-compose
Docker
npm
behave (python)

Grid Initialization:
`cd grid
grid.sh start`

Protractor Tests:
`npm install
cd protractor
protractor config/conf_{num}_sessions.js`

Behave Tests:
`cd behave
behave`