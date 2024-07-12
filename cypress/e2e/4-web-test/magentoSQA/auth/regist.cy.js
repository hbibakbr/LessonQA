import '../../../../support/commands'

describe('Registration Test', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })

  it('Verify Success Registration', () => {
    cy.get('#firstname').type('Andre')
    cy.get('#lastname').type('Jhonson')
    cy.get('#email_address').type('andrejohnsong@gmail.com')
    cy.get('#password').type('Password_123')
    cy.get('#password-confirmation').type('Password_123')
    cy.get('#form-validate > .actions-toolbar > div.primary > button').click()
  })

  it('Verify Failed Registration - Already account same email', () => {
    cy.get('#firstname').type('Andre')
    cy.get('#lastname').type('Jhonson')
    cy.get('#email_address').type('andrejohnsong@gmail.com')
    cy.get('#password').type('Password_123')
    cy.get('#password-confirmation').type('Password_123')
    cy.get('#form-validate > .actions-toolbar > div.primary > button').click()
    cy.alertFailedRegist('.message-error', 'There is already an account with this email address.')
  })

  it('Verify Failed Registration - Different password confirmation', () => {
    cy.get('#firstname').type('Andre')
    cy.get('#lastname').type('Jhonson')
    cy.get('#email_address').type('andrejohnsong@gmail.com')
    cy.get('#password').type('Password_123')
    cy.get('#password-confirmation').type('Password_124')
    cy.get('#form-validate > .actions-toolbar > div.primary > button').click()
    cy.alertPassword('#password-confirmation-error', 'Please enter the same value again')
    
  })
})