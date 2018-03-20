Feature: Load Test

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
        Then The page should contain Failure Text

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds

  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds