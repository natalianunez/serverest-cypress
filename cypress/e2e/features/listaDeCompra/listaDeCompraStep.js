import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../login/loginPage'
import HomePage from '../home/homePage'
import ListaDeCompraPage from './listadecompraPage'


Given("I am logged-in as user", () => {
    LoginPage.LogInAs("user")
})

When("I add an existing product to my shopping list", () => {
    HomePage.addProduct()
})

Then("I navigate to shopping list page", () => {
    ListaDeCompraPage.onListaDeCompraPage()
})

And("I can find my product on the list", () =>{
    ListaDeCompraPage.hasAmountOfProducts(1)
})