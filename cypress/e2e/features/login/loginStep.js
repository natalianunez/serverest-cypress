import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
import HomePage from '../home/homePage'

Given("I am on the serverest login page", () =>{
    LoginPage.navigateToLoginPage()
})

When("I submit my valid credentials as {string}", (access_level) => {
    LoginPage.submitCredentials(access_level)
})

Then("I go to the logged-in homepage", () => {
    HomePage.userIsLoggedIn()
})

And("I can access all the features according to my {string}", (access_level) => {
    if (access_level === "user"){
        HomePage.userFunctionalities()
    } else {
        HomePage.adminFunctionalities()
    }
})

Given("I click on 'Cadastre-se'", () => {
    LoginPage.SignUp()
})

When("I submit a new user registration", () => {
    LoginPage.FillRegistration()
})