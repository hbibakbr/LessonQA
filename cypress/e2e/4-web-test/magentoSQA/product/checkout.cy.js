import "../../../../support/commands"
import cartPage from "../../../../support/pageObject/magentoSQA/cart.page"
import productPage from "../../../../support/pageObject/magentoSQA/product.page"

describe('Functional Checkout Test Case', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.wait(2000)
        cy.get('#ui-id-3').click()
        cy.get('.products-grid > .product-items > :nth-child(1)').click()
        cy.get('#qty').clear().type('1')
        cy.get('#product-addtocart-button').click()
        cy.messageSuccessAddCart('.message-success', 'You added ')
    })

    // Custom Commands.ja

    it('Verify Success Checkout Item', () => {
        cy.wait(2000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
        cy.wait(10000)
        cy.get('.methods > :nth-child(1) > .action').click()
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.wait(6000)
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({force: true})
        cy.get('.base').should('contain.text', 'Thank you for your purchase!')

    })

    // Page object Modeling (POM)

    it('Verify Success Checkout Item', () => {
        cy.wait(2000)
        cartPage.clickCart()
        cy.wait(2000)
        cartPage.viewEditCart()
        cy.wait(10000)
        cy.get('.methods > :nth-child(1) > .action').click()
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.wait(6000)
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({force: true})
        cy.get('.base').should('contain.text', 'Thank you for your purchase!')

    })


    /* it('Verify Success Checkout Item', () => { // Address not added yet
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.wait(2000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
        cy.wait(10000)
        cy.get('.methods > :nth-child(1) > .action').click()
        cy.wait(10000)
        cy.get('input[name="street[0]"]').type('Tarpey Village E Dakota Ave')
        cy.get('[name="shippingAddress.city"]').type('Fresno')
        cy.get('select[name="region_id"]').select('California')
        cy.get('[name="shippingAddress.postcode"]').type('93727')
        cy.get('[name="shippingAddress.telephone"]').type('2133357889')
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.wait(6000)
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({force: true})
        cy.get('.base').should('contain.text', 'Thank you for your purchase!')
    }) */
})