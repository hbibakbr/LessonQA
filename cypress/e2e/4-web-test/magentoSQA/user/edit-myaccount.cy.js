import loginPage from "../../../../support/pageObject/magentoSQA/login.page"
import '../../../../support/commands'
import dropDown from "../../../../support/pageObject/magentoSQA/dropDown"
import myaccountPage from "../../../../support/pageObject/magentoSQA/myaccount.page"
import registPage from "../../../../support/pageObject/magentoSQA/regist.page"

const userLogin = require ('../../../../fixtures/magentoSQA/userLogin.json')
const userRegist = require ('../../../../fixtures/magentoSQA/userRegist.json')

describe('Functional Edit My Account Test', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
  })

    // Custom commands.js

  it('Verify Success Change Firstname', () => {
      cy.login('andrejohnson@gmail.com', 'Password_123')
      cy.get('#send2').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click() // Click dropdown menu
      cy.wait(2000)
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible').click({ force: true })
      cy.wait(2000)
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear().type('Andre Manuel')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      // cy.get('.message-success').should('contain.text', 'You saved the account information.')
      cy.messageSuccess('.message-success', 'You saved the account information.')
  })

  it('Verify Failed Change Firstname - Empty Firstname', () => {
      cy.login('andrejohnson@gmail.com', 'Password_123')
      cy.get('#send2').click()
      cy.wait(2000)
      cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click() // Click dropdown menu
      cy.wait(2000)
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible').click({ force: true })
      cy.wait(2000)
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear().type(' ')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      // cy.get('.message-success').should('contain.text', 'You saved the account information.')
      cy.messageFailedFirstname('#firstname-error', 'This is a required field.')
  })


  it('Verify Success Change Lastname', () => {
    cy.login('andrejohnson@gmail.com', 'Password_123')
    cy.get('#send2').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click() // Click dropdown menu
    cy.wait(2000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#lastname').clear().type('Robert Johnson')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    // cy.get('.message-success').should('contain.text', 'You saved the account information.')
    cy.messageSuccess('.message-success', 'You saved the account information.')
  })

  it('Verify Failed Change Lastname - Empty Lastname', () => {
    cy.login('andrejohnson@gmail.com', 'Password_123')
    cy.get('#send2').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click() // Click dropdown menu
    cy.wait(2000)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible').click({ force: true })
    cy.wait(2000)
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
    cy.get('#lastname').clear().type(' ')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    // cy.get('.message-success').should('contain.text', 'You saved the account information.')
    cy.messageFailedLastname('#lastname-error', 'This is a required field.')
  })


    // Page Object Modeling (POM)

  it('Verify Success Change Firstname', () => {
    cy.get(loginPage.email).type("andrejohnson@gmail.com")
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.firstName).clear().type('Andre Manuel')
    myaccountPage.clickSave()
    myaccountPage.verifySuccessChangeName('You saved the account information.')
  })

  it('Verify Failed Change Firstname - Empty Firstname', () => {
    cy.get(loginPage.email).type("andrejohnson@gmail.com")
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.firstName).clear().type(' ')
    myaccountPage.clickSave()
    myaccountPage.alertFailedChangeFirstame('This is a required field.')
  })

  it('Verify Success Change Lastname', () => {
    cy.get(loginPage.email).type("andrejohnson@gmail.com")
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.lastName).clear().type('Robert Johnson')
    myaccountPage.clickSave()
    myaccountPage.verifySuccessChangeName('You saved the account information.')
  })

  it.only('Verify Failed Change Lastname - Empty Lastname', () => {
    cy.get(loginPage.email).type("andrejohnson@gmail.com")
    cy.get(loginPage.password).type('Password_123')
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.lastName).clear().type(' ')
    myaccountPage.clickSave()
    myaccountPage.alertFailedChangeLastname('This is a required field.')
  })

    // Fixtures

  it('Verify Success Change Firstname', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.firstName).clear().type(userRegist.firstnameChange)
    myaccountPage.clickSave()
    myaccountPage.verifySuccessChangeName(userRegist.message.msg_success_save)
  })

  it('Verify Failed Change Firstname - Empty Firstname', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.firstName).clear().type(' ')
    myaccountPage.clickSave()
    myaccountPage.alertFailedChangeFirstame(userRegist.message.msg_failed_firstname)
    })

  it.only('Verify Success Change Lastname', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.lastName).clear().type(userRegist.lastnameChange)
    myaccountPage.clickSave()
    myaccountPage.verifySuccessChangeName(userRegist.message.msg_success_save)
  })

  it('Verify Failed Change Lastname - Empty lastname', () => {
    cy.get(loginPage.email).type(userLogin.valid_email)
    cy.get(loginPage.password).type(userLogin.valid_password)
    loginPage.clickLoginButton()
    cy.wait(2000)
    dropDown.dropDownMenu()
    cy.wait(2000)
    dropDown.clickMyAccount()
    cy.wait(2000)
    myaccountPage.clickEdit()
    cy.get(registPage.firstName).clear().type(' ')
    myaccountPage.clickSave()
    myaccountPage.alertFailedChangeLastname(userRegist.message.msg_failed_lastname)
  })
})