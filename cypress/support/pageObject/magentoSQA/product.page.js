class productPage {
    clickWayfarerMessengerBag () {
        cy.get('.products-grid > .product-items > :nth-child(1)').click()
    }

    inputQuantity (qty) {
        cy.get('#qty').clear().type(qty)
    }

    emptyQuantity () {
        cy.get('#qty').clear()
    }

    clickAddCart () {
        cy.get('#product-addtocart-button').click()
    }

    verifySuccessAdded (message) {
        cy.get('.message-success').should('contain.text', message)
    }

    alertFailedAdded (message) {
        cy.get('.mage-error').should('contain.text', message)
    }
}

export default new productPage()