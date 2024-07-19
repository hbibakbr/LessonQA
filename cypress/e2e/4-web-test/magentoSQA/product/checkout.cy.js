import "../../../../support/commands"
import cartPage from "../../../../support/pageObject/magentoSQA/cart.page"
const productCart = require ("../../../../fixtures/magentoSQA/productCart.json")

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

    // Custom Commands.js

    it('Verify Success Checkout Item', () => {
        cy.wait(2000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
        cy.wait(60000)
        cy.get('.methods > :nth-child(1) > .action').click()
        cy.wait(60000)
        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.wait(3000)
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click({force: true})
        cy.messageSuccessCheckout('.base', 'Thank you for your purchase!')
        //cy.get('.base').should('contain.text', 'Thank you for your purchase!')
        
    })

    it.only('Verify Failed Checkout Item on Cart - No Shipping Methods', () => {
        cy.wait(2000)
        cy.get('.showcart').click()
        cy.wait(2000)
        cy.get(':nth-child(7) > .secondary > .action > span').should('be.visible').click({ force: true })
        cy.wait(60000)
        cy.get('.methods > :nth-child(1) > .action').click()
        cy.wait(60000)
        cy.get('.button').click()
        cy.alertFailedCheckoutNoShippingMethods('#co-shipping-method-form > .message', 'The shipping method is missing. Select the shipping method and try again.')
        // cy.get('#co-shipping-method-form > .message').should('contain.text', 'The shipping method is missing. Select the shipping method and try again.')
    })

    // Page object Modeling (POM)

    it('Verify Success Checkout Item', () => {
        cy.wait(2000)
        cartPage.clickCart()
        cy.wait(2000)
        cartPage.viewEditCart()
        cy.wait(10000)
        cartPage.clickProceedCheckout()
        cy.wait(10000)
        cartPage.shippingMethodsBestWay()
        cartPage.clickNext()
        cy.wait(3000)
        cartPage.clickPlaceOrder()
        cartPage.messageSuccessCheckout('Thank you for your purchase!')
        
    })

    it('Verify Failed Checkout Item on Cart - No Shipping Methods', () => {
        cy.wait(2000)
        cartPage.clickCart()
        cy.wait(2000)
        cartPage.viewEditCart()
        cy.wait(10000)
        cartPage.clickProceedCheckout()
        cy.wait(10000)
        cartPage.clickNext()
        cartPage.alertFailedNoShippingMethods('The shipping method is missing. Select the shipping method and try again.')
    })

    // Fixtures

    it('Verify Success Checkout Item', () => {
        cy.wait(2000)
        cartPage.clickCart()
        cy.wait(2000)
        cartPage.viewEditCart()
        cy.wait(10000)
        cartPage.clickProceedCheckout()
        cy.wait(10000)
        cartPage.shippingMethodsBestWay()
        cartPage.clickNext()
        cy.wait(30000)
        cartPage.clickPlaceOrder()
        cartPage.messageSuccessCheckout(productCart.message.msg_succces_checkout)
        
    })

    it('Verify Failed Checkout Item on Cart - No Shipping Methods', () => {
        cy.wait(2000)
        cartPage.clickCart()
        cy.wait(2000)
        cartPage.viewEditCart()
        cy.wait(10000)
        cartPage.clickProceedCheckout()
        cy.wait(10000)
        cartPage.clickNext()
        cartPage.alertFailedNoShippingMethods(productCart.message.msg_failed_no_shipping_methods)
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