/// <reference types="cypress" />

import { homepage, user } from '../../support/PageObjects/authentication'

describe('login to the moon front office', () => {
    beforeEach(() => {
        homepage.authenticate() 
    })
    it('connect with an user account', () => {
        let rememberUser = false; 

        homepage.clickConnect()
        user.connectButton()
        user.fillEmail()
        user.fillPassword()

        if(rememberUser) {
            cy.getBySelector('[id="keep-connection"]')
              .check()
        }
        user.submit()
    })
})