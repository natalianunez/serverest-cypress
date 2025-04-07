const URL = "https://front.serverest.dev/admin/cadastrarprodutos"

const NOME_INPUT = "#nome"
const PRECO_INPUT = "#price"
const DESCRICAO_INPUT = "#description"
const QUANTIDADE_INPUT = "#quantity"
const IMAGEM_INPUT = "#imagem"
const CADASTRAR_BTN = "[data-testid='cadastarProdutos']"

import { faker } from "@faker-js/faker"
import ListaDeProdutoPage from "../listaDeProduto/listaDeProdutoPage"

class GerenciarProdutoPage{
    static onCadastroProdutoPage(){
        cy.url().should('eq', URL)
    }

    static fillProductForm(){
        let product = {
            nome: faker.word.words(),
            preco: faker.number.int(),
            descricao: faker.commerce.productDescription(),
            quantidade: faker.number.int()
        }

        cy.get(NOME_INPUT).type(product.nome)
        cy.get(PRECO_INPUT).type(product.preco)
        cy.get(DESCRICAO_INPUT).type(product.descricao)
        cy.get(QUANTIDADE_INPUT).type(product.quantidade)
        cy.get(IMAGEM_INPUT).attachFile('produto.jpeg')

        cy.get(CADASTRAR_BTN).click()

        ListaDeProdutoPage.FindProductByCell(product)
    }
}

export default GerenciarProdutoPage