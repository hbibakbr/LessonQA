class cartPage {
    clickCart () {
        cy.get('.showcart').click()
    }

    viewEditCart () {
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
    }
}

export default new cartPage()