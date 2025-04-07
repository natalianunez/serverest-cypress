Feature: Shopping List

Scenario: Add product to shopping list
Given I am logged-in as user
When I add an existing product to my shopping list
Then I navigate to shopping list page
And I can find my product on the list