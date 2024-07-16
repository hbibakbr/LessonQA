describe('Functional Choose Product', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    })

    // Custom Commands.js

    it('Succes Get Product', () => { 
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.get('.product-items > :nth-child(1)').click()
    })
})