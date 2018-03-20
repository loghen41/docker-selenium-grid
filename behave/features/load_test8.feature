Feature: Load Test

  Scenario: Run a simple test
    Given I navigate to google
      When I enter fasd into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar

  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar
        Then The page should contain Failure Text

  Scenario: Run a simple test
    Given I navigate to google
      When I enter fdsa into the search bar
      When I clear the search bar
      When I enter fdsa into the search bar
      When I clear the search bar