/// <reference types="cypress" />

describe('Reqres API Testing - Get User List', () => {
    it('get list user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})