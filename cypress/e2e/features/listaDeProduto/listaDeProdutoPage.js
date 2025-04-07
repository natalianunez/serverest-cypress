const URL = "https://front.serverest.dev/admin/listarprodutos"

class ListaDeProdutoPage {
    static FindProductByCell(product){
        cy.contains('td', product.nome)
        cy.contains('td', product.preco)
        cy.contains('td', product.descricao)
        cy.contains('td', product.quantidade)
        cy.contains('td', "C:\\fakepath\\produto.jpeg")
    }

    static isOnListaDeProdutoPage(){
        cy.url().should('eq', URL)
    }
}

export default ListaDeProdutoPage