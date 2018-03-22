Feature: Load Test

  @Load1
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fasd into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar

  @Load2
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar

  @Load3
  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar