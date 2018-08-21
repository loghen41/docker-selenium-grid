Feature: Load Test

  @smoke
  Scenario: Google Test
    Given I navigate to google
      When I enter "asdf" into the search bar
      When I clear the search bar


  @smoke
  @inDevelopment
  Scenario: Google Test 2
    Given I navigate to google
    When I enter "asdf" into the search bar
    When I clear the search bar



  @smoke
  @coolio
  @rufio
  Scenario: Google Test 3
    Given I navigate to google
    When I enter "fdsa" into the search bar
    When I clear the search bar
