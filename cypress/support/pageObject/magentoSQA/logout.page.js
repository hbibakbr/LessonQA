class logoutPage {
    clickLogoutButton() {
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({ force: true })
    }
}

export default new logoutPage()