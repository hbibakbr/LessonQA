// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Registration

Cypress.Commands.add('alertFailedRegist', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('alertPassword', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

// Login

Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
})

Cypress.Commands.add('alertFailedLoginWrongEmail', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('alertFailedLoginInvalidEmail', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('alertFailedLoginWrongPass', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('messageSuccess', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('messageFailedFirstname', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('messageFailedLastname', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('messageSuccessAddCart', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('messageFailedAddCart', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

// Cart

Cypress.Commands.add('messageSuccessCheckout', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})

Cypress.Commands.add('alertFailedCheckoutNoShippingMethods', (selector, message) => {
    cy.get(selector).should('contain.text', message)
})


