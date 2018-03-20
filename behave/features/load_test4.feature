Feature: Load Test

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I clear the search bar
      When I enter asdf into the search bar
      When I clear the search bar

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I clear the search bar
      When I enter asdf into the search bar
      When I clear the search bar

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I clear the search bar
      When I enter asdf into the search bar
      When I clear the search bar
        Then The page should contain Failure Text