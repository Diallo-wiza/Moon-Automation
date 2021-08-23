import { Given , Then , When} from "cypress-cucumber-preprocessor/steps";
import { homepage, user } from './authentication'

//test steps 
Given('I open the moon front', () => {
    homepage.authenticate()
})

When('i get to the user creation profile page', () => {
    homepage.authenticate()
    homepage.clickConnect()
    user.createAccountButton()
})

Then('i fill the user informations {string} and {string} and {string}', (email, password, password) => {
    cy.getBySelector('[name="email"]').type(email)
    cy.getBySelector('[name="password"]').type(password, {sensitive: true})
    cy.getBySelector('[name="passwordConf"]').type(password, {sensitive: true})
    user.clickOnCreate()
})