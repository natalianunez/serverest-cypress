Feature: Manage products

Scenario: Register products
Given I am logged-in as admin
And Navigate to products registration page
When I submit the form with all required information
Then The product list page is displayed