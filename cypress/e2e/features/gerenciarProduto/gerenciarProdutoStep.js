import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/loginPage";
import HomePage from "../home/homePage";
import GerenciarProdutoPage from "./gerenciarProdutoPage";
import ListaDeProdutoPage from "../listaDeProduto/listaDeProdutoPage";

Given("I am logged-in as admin", () => {
    LoginPage.LogInAs("admin")
})

And("Navigate to products registration page", () => {
    HomePage.navigateToProductRegistration()
    GerenciarProdutoPage.onCadastroProdutoPage()
})

When("I submit the form with all required information", () =>{
    GerenciarProdutoPage.fillProductForm()
})

Then("The product list page is displayed", () => {
    ListaDeProdutoPage.isOnListaDeProdutoPage()
})