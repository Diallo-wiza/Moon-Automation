/// <reference types="cypress" />

import { homepage, user } from '../../support/PageObjects/authentication'

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
        cy.getBySelector('[name="email"]').type(users.email)
        cy.getBySelector('[name="password"]').type(users.password, {sensitive: true})
        cy.getBySelector('[name="passwordConf"]').type(users.password, {sensitive: true})
        user.clickOnCreate()
    })
})