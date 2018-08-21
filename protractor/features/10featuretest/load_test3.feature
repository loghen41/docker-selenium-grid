Feature: Load Test

  @smoke
  Scenario: Google Test
    Given I navigate to google
        Then The element "not_real_element" should contain "Missing Text"