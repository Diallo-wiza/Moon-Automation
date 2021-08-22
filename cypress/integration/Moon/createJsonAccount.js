/// <reference types="cypress" />

import { homepage, user } from './authentication'

describe('Login to the moon front office with a json file', function () { 
    let users;
    beforeEach(function() {
        cy.fixture('users').then((data) => {
            users = data;
            return users
        })
    })
    it('Validate successful Login', () => {
        homepage.authenticate()
        homepage.clickConnect()
        user.createAccountButton()
        cy.get('[name="email"]').type(users.email)
        cy.get('[name="password"]').type(users.password)
        cy.get('[name="passwordConf"]').type(users.password)
        user.clickOnCreate()
    })
})