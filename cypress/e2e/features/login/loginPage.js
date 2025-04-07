const URL = "https://front.serverest.dev/"
const EMAIL_INPUT = "#email"
const PASSWORD_INPUT = "#password"
const ENTRAR_BTN = "[data-testid='entrar']"
const CADASTRESE_BTN = "[data-testid='cadastrar']"

const CADASTRO_NOME_INPUT = "#nome"
const CADASTRO_EMAIL_INPUT = "#email"
const CADASTRO_SENHA_INPUT = "#password"
const CADASTRAR_BTN = "[data-testid='cadastrar']"

import HomePage from "../home/homePage"

class LoginPage{
    static navigateToLoginPage(){
        cy.visit(URL)
    }

    static fillEmail(email){
        cy.get(EMAIL_INPUT).type(email)
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password)
    }

    static submitCredentials(access_level){
        cy.fixture(access_level).then((userdata) => {
            this.fillEmail(userdata.email)
            this.fillPassword(userdata.password)
        })

        cy.get(ENTRAR_BTN).click()
    }

    static LogInAs(access_level){
        this.navigateToLoginPage()
        this.submitCredentials(access_level)
        HomePage.userIsLoggedIn()
    }

    static SignUp(){
        cy.get(CADASTRESE_BTN).click()
    }

    static FillRegistration(){
        cy.get(CADASTRO_NOME_INPUT).type("new user name")
        cy.get(CADASTRO_EMAIL_INPUT).type( Date.now() + "@email.com")
        cy.get(CADASTRO_SENHA_INPUT).type("newuserpass")

        cy.get(CADASTRAR_BTN).click()
    }
}

export default LoginPage