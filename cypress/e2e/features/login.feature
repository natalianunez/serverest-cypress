Feature: Login

Scenario Outline: Authorization
Given I am on the serverest login page
When I submit my valid credentials as "<access-level>"
Then I go to the logged-in homepage
And I can access all the features according to my "<access-level>"

Examples:
| access-level  |
| user          |
| admin         |

Scenario: Register user
Given I am on the serverest login page
And I click on 'Cadastre-se'
When I submit a new user registration
Then I go to the logged-in homepage