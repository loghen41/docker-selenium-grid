Feature: Load Test

  Scenario: Google Test
    Given I navigate to google
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
      When I enter "asdf" into the search bar
      When I clear the search bar
      When I wait for 1 seconds
        Then The element "not_real_element" should contain "Missing Text"