const LOGOUT_BTN = "[data-testid='logout']"
const CADASTRAR_USER_BTN = "[data-testid='cadastrar-usuarios']"
const LISTAR_USER_BTN = "[data-testid='listar-usuarios']"
const CADASTRAR_PRODUCT_BTN = "[data-testid='cadastrar-produtos']"
const LISTAR_PRODUCT_BTN = "[data-testid='listar-produtos']"
const RELATORIO_BTN = "[data-testid='link-relatorios']"

const LISTA_COMPRAS_BTN = "[data-testid='lista-de-compras']"
const CARRINHO_BTN = "[data-testid='carrinho']"
const FIRST_PRODUCT = "[data-testid='adicionarNaLista']"

const HOME_BTN = "[data-testid='home']"


class HomePage{
    static userIsLoggedIn(){
        cy.get(LOGOUT_BTN).should('exist')
    }

    static adminFunctionalities(){
        cy.get(HOME_BTN).should('exist').and('be.visible')
        cy.get(CADASTRAR_USER_BTN).should('exist').and('be.visible')
        cy.get(LISTAR_USER_BTN).should('exist').and('be.visible')
        cy.get(CADASTRAR_PRODUCT_BTN).should('exist').and('be.visible')
        cy.get(LISTAR_PRODUCT_BTN).should('exist').and('be.visible')
        cy.get(RELATORIO_BTN).should('exist').and('be.visible')

        cy.get(LISTA_COMPRAS_BTN).should('not.exist')
        cy.get(CARRINHO_BTN).should('not.exist')
    }

    static userFunctionalities(){
        cy.get(HOME_BTN).should('exist').and('be.visible')
        cy.get(LISTA_COMPRAS_BTN).should('exist').and('be.visible')
        cy.get(CARRINHO_BTN).should('exist').and('be.visible')

        cy.get(CADASTRAR_USER_BTN).should('not.exist')
        cy.get(LISTAR_USER_BTN).should('not.exist')
        cy.get(CADASTRAR_PRODUCT_BTN).should('not.exist')
        cy.get(LISTAR_PRODUCT_BTN).should('not.exist')
        cy.get(RELATORIO_BTN).should('not.exist')
    }

    static addProduct(){
        cy.get(FIRST_PRODUCT).first()
            .should('be.visible')
            .should('be.enabled')
            .click()
    }

    static navigateToProductRegistration(){
        cy.get(CADASTRAR_PRODUCT_BTN).click()

    }
}

export default HomePage