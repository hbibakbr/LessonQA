class myAccountPage {

    clickEdit() {
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    }

    clickSave() {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }

    verifySuccessChangeName(message) {
        cy.get('.message-success').should('contain.text', message)
    }

    alertFailedChangeFirstame(message) {
        cy.get('#firstname-error').should('contain.text', message)
    }
    
    alertFailedChangeLastname(message) {
        cy.get('#lasstname-error').should('contain.text', message)
    }
}

export default new myAccountPage()