/// <reference types="cypress" />

import { homepage, user } from './authentication'

describe('login via XHR request', () => {
    beforeEach(() => {
        cy.request ({
            method: 'POST',
            url: '/',
            body: {
                username: Cypress.env("username"),
                password: Cypress.env("password")
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        }) 
    })
    it('connect with an user account', () => {
        homepage.clickConnect()
    })
})