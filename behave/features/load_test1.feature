Feature: Load Test

  @Load1
  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
        Then The page should contain Failure Text

  @Load2
  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds

  @Load3
  Scenario: Run a simple test
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds
    Given I navigate to google
      When I enter asdf into the search bar
      When I wait for 1 seconds