const URL = "https://front.serverest.dev/minhaListaDeProdutos"
const LIMPARLISTA_BTN = "[data-testid='limparLista']"
const ALLPRODUCTS_CARD = "[class='card col-3']"

import LoginPage from "../login/loginPage"
import HomePage from "../home/homePage"

class ListaDeCompraPage{
    static onListaDeCompraPage(){
        cy.url().should('eq', URL)
    }

    static hasAmountOfProducts(amount){
        cy.get(ALLPRODUCTS_CARD).should('have.length', amount)
    }

    static cleanList(){
        cy.get(LIMPARLISTA_BTN).click()
    }
}

export default ListaDeCompraPage