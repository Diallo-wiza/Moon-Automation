/// <reference types="cypress" />

import { homepage } from './authentication'
import { user } from './authentication'

describe('login to the moon front office', () => {
    beforeEach(() => {
        homepage.authenticate() 
    })
    it('connect with an user account', () => {
        homepage.clickConnect()
        user.connectButton()
        user.fillEmail()
        user.fillPassword()
        user.keepConnect()
        user.submit()
        //user.fillInformations()
    })
})