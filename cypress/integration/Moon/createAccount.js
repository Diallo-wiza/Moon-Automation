/// <reference types="cypress" />

import { homepage } from './authentication'
import { user } from './authentication'

describe('Homepage authentication required', () => {
    beforeEach(() => {
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    homepage.authenticate() 
    })
    it('create a user account', () => {
      homepage.clickConnect()
      user.createAccountButton()
      user.email()
      user.password()
      user.passwordRepeat()
      user.clickOnCreate()
    })
})