class cartPage {
    clickCart () {
        cy.get('.showcart').click()
    }

    viewEditCart () {
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
    }

    clickProceedCheckout () {
        cy.get('.methods > :nth-child(1) > .action').click()
    }

    shippingMethodsBestWay () {
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
    }

    clickNext () {
        cy.get('.button').click()
    }

    clickPlaceOrder () {
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({force: true})
    }

    messageSuccessCheckout (message) {
        cy.get('.base').should('contain.text', message)
    }
    
    alertFailedNoShippingMethods (message) {
        cy.get('#co-shipping-method-form > .message').should('contain.text', message)
    }
}

export default new cartPage()