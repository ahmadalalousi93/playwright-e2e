Feature: CVS home

  Scenario: Home loads and Sign in is visible
    Given I open the CVS home page
    Then I am on a CVS URL
    And I can see the Sign in link
