Feature: Load Test

  @Load1
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fasd into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter fdsa into the search bar
      When I wait for 1 seconds

  @Load2
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter fdsa into the search bar
      When I wait for 1 seconds

  @Load3
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter fdsa into the search bar
      When I wait for 1 seconds