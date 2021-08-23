/// <reference types="cypress" />

import { homepage, user } from '../../support/PageObjects/authentication'

describe('Moon Front User creation ', () => {
    beforeEach(() => {
    homepage.authenticate() 
    })
    it('create a user account', () => {
      homepage.clickConnect()
      user.createAccountButton()
      user.enterEmail()
      user.enterPassword()
      user.reEnterPassword()
      user.clickOnCreate()
    })
})