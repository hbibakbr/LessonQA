

class dropDown {
    dropDownMenu() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click() 
    }

    clickMyAccount() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').should('be.visible').click({ force: true })
    }



}

export default new dropDown()