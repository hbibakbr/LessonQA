import loginPage from "../../../../support/pageObject/magentoSQA/login.page"
import '../../../../support/commands'
import logoutPage from "../../../../support/pageObject/magentoSQA/logout.page"
const userLogin = require('../../../../fixtures/magentoSQA/userLogin.json')

describe('Functionela Logout Test', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    })

    // Custom Commands

    it.only('Verify Success Logout', () => {
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
        cy.wait(2000) // Memberikan waktu untuk menu logout muncul
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').should('be.visible').click({ force: true }) 
        cy.wait(2000)
    })

    // Page Object Modeling (POM)

    it('Verify Success Logout', () => {
        cy.get(loginPage.email).type('andrejohnson@gmail.com')
        cy.get(loginPage.password).type('Password_123')
        loginPage.clickLoginButton()
        logoutPage.clickLogoutButton()
        cy.wait(2000)

    })

    // Fixtures

    it('Verify Success Logout', () => {
        cy.get(loginPage.email).type(userLogin.valid_email)
        cy.get(loginPage.password).type(userLogin.valid_password)
        loginPage.clickLoginButton()
        logoutPage.clickLogoutButton()
        cy.wait(2000)
    })
})