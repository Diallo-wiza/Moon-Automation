// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("userlogin", () => {
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
  });