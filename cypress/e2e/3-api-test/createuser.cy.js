/// <reference types="cypress" />

describe('Reqres API Testing - Create List', () => {
    it('create user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name" : "Habib Akbar",
                "job" : "Quality Assurance"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })
}) 
