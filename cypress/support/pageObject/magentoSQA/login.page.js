class loginPage {
    email = '#email'
    password = '#pass'
    loginButton = '#send2'
    alertFailedLogin = '#email-error'

    clickLoginButton () {
        cy.get('#send2').click()
    }

    verifyAlertLoginFailedWrongEmail(message) {
        cy.get('.message-error').should('contain.text', message)
    }

    verifyAlertLoginFailedInvalidEmail(message) {
        cy.get('#email-error').should('contain.text', message)
    }

    verifyAlertLoginFailedWrongPass(message) {
        cy.get('.message-error').should('contain.text', message)
    }

}

export default new loginPage()