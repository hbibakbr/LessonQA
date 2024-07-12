import loginPage from "../../../../support/pageObject/magentoSQA/login.page"
import '../../../../support/commands'
const userLogin = require('../../../../fixtures/magentoSQA/userLogin.json')

describe('Functional Login Test', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
  });

// Custom commands.js

  it('Verify Success Login', () => {
   /* cy.get('#email').type('andrejohnson@gmail.com')
    cy.get('#pass').type('Password_123')
    cy.get('#send2').click() */
    cy.login('andrejohnson@gmail.com', 'Password_123')
    cy.get('#send2').click()
  })

  it('Verify Failed Login - Wrong Email', () => {
    cy.login('johnsonandre@gmail.com', 'Password_123')
    cy.get('#send2').click()
    cy.alertFailedLoginWrongEmail('.message-error', 'Please wait and try again later')
  })

  it('Verify Failed Login - Wrong Password', () => {
    cy.login('andrejohnson@gmail.com', 'Password_124')
    cy.get('#send2').click()
    cy.alertFailedLoginWrongPass('.message-error', 'Please wait and try again later')
  })

  it('Verify Failed Login - Invalid Email', () => {
    cy.login('andreJohnson', 'Password_123')
    cy.get('#send2').click()
    cy.alertFailedLoginInvalidEmail('#email-error', 'Please enter a valid email address')
  })

// POM ( Page Object Modedling )

  it('Verify Success Login', () => {
    cy.get(loginPage.email).type('andrejohnson@gmail.com')
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
  })
  
  it('Verify Failed Login - Wrong Email', () => {
    cy.get(loginPage.email).type('johnsonandre@gmail.com')
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedWrongEmail('Please wait and try again later')
  })

  it('Verify Failed Login - Wrong Password', () => {
    cy.get(loginPage.email).type('andrejohnson@gmail.com')
    cy.get(loginPage.password).type('Password_124')
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedWrongPass('Please wait and try again later')
  })

  it('Verify Failed Login - Invalid Email', () => {
    cy.get(loginPage.email).type('andrejohnson')
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedInvalidEmail('Please enter a valid email address')
  })

// Fixtures

  it('Verify Success Login', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
  })
  
  it('Verify Failed Login - Wrong Email', () => {
    cy.get(loginPage.email).type(userLogin.wrong_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedWrongEmail(userLogin.message.msg_wrong_email)
  })

  it('Verify Failed Login - Wrong Password', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.wrong_password)
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedWrongPass(userLogin.message.msg_wrong_password)
  })

  it.only('Verify Failed Login - Invalid Email', () => {
    cy.get(loginPage.email).type(userLogin.invalid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    loginPage.verifyAlertLoginFailedInvalidEmail(userLogin.message.msg_invalid_email)
  })

})