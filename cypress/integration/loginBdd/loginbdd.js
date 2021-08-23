import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://develop-sr3snxi-esslq55riddva.eu-4.platformsh.site'

Given('I open the moon front page', () => {
  cy.visit((url), {
          auth: {
              username: Cypress.env("username"),
              password: Cypress.env("password")
          }
      })
})

When(`I click on the profile button`, () => {
  cy.get('[id="mini-account-toggle-cta"]').click()
})

And(`I click on the Create account button`, () => {
  cy.get('[class="light-button second-button"]')
        .should('have.text', 'Créer mon compte')
        .click();
})

And('I enter {string}', (email) => {
  cy.get('[name="password"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'Mot de passe *')
  cy.get('[name="email"]')
        .click()
        .type(email)
})

And('I put {string}', (password) => {
  cy.get('[name="password"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'Mot de passe *')
  cy.get('[name="password"]')
        .click()
        .type(password)
})

And('I confirm {string}', (password) => {
  cy.get('[name="passwordConf"]')
        .invoke('attr', 'placeholder')
        .should('contain', 'Répéter le mot de passe *')
  cy.get('[name="passwordConf"]')
        .click()
        .type(password)
})

Then('I click on the submit button', () => {
  cy.get('[id="accept"]')
         .check()
      cy.get('input[type=submit]')
        .click({multiple: true})
})