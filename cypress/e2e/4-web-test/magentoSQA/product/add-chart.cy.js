import loginPage from "../../../../support/pageObject/magentoSQA/login.page"
import menuPage from "../../../../support/pageObject/magentoSQA/menu.page"
import productPage from "../../../../support/pageObject/magentoSQA/product.page"

const productCart = require ("../../../../fixtures/magentoSQA/productCart.json")
const userLogin = require("../../../../fixtures/magentoSQA/userLogin.json")

describe('Functional Test Product Cart', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
    })

    // Custom Commands.js

    it('Verify Success Add Item to Cart', () => {
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.wait(2000)
        cy.get('#ui-id-3').click()
        cy.get('.products-grid > .product-items > :nth-child(1)').click()
        cy.get('#qty').clear().type('1')
        cy.get('#product-addtocart-button').click()
        cy.messageSuccessAddCart('.message-success', 'You added ')

        // cy.get('.message-success').should('contain.text', 'You added to your shopping cart.')
    })

    it('Verify Failed Add Item to Cart - 0 Quantity', () => {
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.wait(2000)
        cy.get('#ui-id-3').click()
        cy.get('.products-grid > .product-items > :nth-child(1)').click()
        cy.get('#qty').clear().type('0')
        cy.get('#product-addtocart-button').click()
        cy.messageFailedAddCart('.mage-error', 'Please enter a quantity greater than 0')

    })

    it('Verify Failed Add Item to Cart - Empty Quantity', () => {
        cy.login('andrejohnson@gmail.com', 'Password_123')
        cy.get('#send2').click()
        cy.wait(2000)
        cy.get('#ui-id-3').click()
        cy.get('.products-grid > .product-items > :nth-child(1)').click()
        cy.get('#qty').clear()
        cy.get('#product-addtocart-button').click()
        cy.messageFailedAddCart('.mage-error', 'Please enter a valid number in this field.')

    })

    // Page Object Modeling (POM)

    it('Verify Success Add Item to Cart', () => {
        cy.get(loginPage.email).type('andrejohnson@gmail.com')
        cy.get(loginPage.password).type('Password_123')
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.inputQuantity('1')
        productPage.clickAddCart()
        productPage.verifySuccessAdded('You added')
    })

    it('Verify Failed Add Item to Cart - 0 Quantity', () => {
        cy.get(loginPage.email).type('andrejohnson@gmail.com')
        cy.get(loginPage.password).type('Password_123')
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.inputQuantity('0')
        productPage.clickAddCart()
        productPage.alertFailedAdded('Please enter a quantity greater than 0')
    })

    it('Verify Failed Add Item to Cart - Empty Quantity', () => {
        cy.get(loginPage.email).type('andrejohnson@gmail.com')
        cy.get(loginPage.password).type('Password_123')
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.emptyQuantity()
        productPage.clickAddCart()
        productPage.alertFailedAdded('Please enter a valid number in this field.')
    })

    // Fixtures

    it('Verify Success Add Item to Cart', () => {
        cy.get(loginPage.email).type(userLogin.valid_email)
        cy.get(loginPage.password).type(userLogin.valid_password)
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.inputQuantity('1')
        productPage.clickAddCart()
        productPage.verifySuccessAdded(productCart.message.msg_success_cart)
    })

    it('Verify Failed Add Item to Cart - O Quantity', () => {
        cy.get(loginPage.email).type(userLogin.valid_email)
        cy.get(loginPage.password).type(userLogin.valid_password)
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.inputQuantity('0')
        productPage.clickAddCart()
        productPage.alertFailedAdded(productCart.message.msg_failed_cart)
    })

    it.only('Verify Failed Add Item to Cart - Empty Quantity', () => {
        cy.get(loginPage.email).type(userLogin.valid_email)
        cy.get(loginPage.password).type(userLogin.valid_password)
        loginPage.clickLoginButton()
        cy.wait(2000)
        menuPage.clickWhatsNew()
        productPage.clickWayfarerMessengerBag()
        productPage.emptyQuantity()
        productPage.clickAddCart()
        productPage.alertFailedAdded(productCart.message.msg_invalid_cart)
    })

})