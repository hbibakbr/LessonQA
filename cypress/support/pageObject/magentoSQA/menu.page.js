class menuPage {
    clickWhatsNew () {
        cy.get('#ui-id-3').click()
    }
}

export default new menuPage()