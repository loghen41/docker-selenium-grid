Feature: Shard Test

  @Shard1
  Scenario: Google Test
    Given I navigate to google
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I wait for 1 seconds

  @Shard2
  Scenario: Google Test
    Given I navigate to google
    When I wait for 1 seconds
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I wait for 1 seconds

  @Shard3
  Scenario: Google Test
    Given I navigate to google
    When I wait for 1 seconds
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I wait for 1 seconds

  @Shard4
  Scenario: Google Test
    Given I navigate to google
    When I wait for 1 seconds
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I wait for 1 seconds

  @Shard5
  Scenario: Google Test
    Given I navigate to google
    When I wait for 1 seconds
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I enter "asdf" into the search bar
    When I clear the search bar
    When I wait for 1 seconds