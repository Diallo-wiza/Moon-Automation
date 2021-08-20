export const homepage = {
    
    authenticate() {
        cy.visit('https://develop-sr3snxi-esslq55riddva.eu-4.platformsh.site', {
            auth: {
                username: Cypress.env("username"),
                password: Cypress.env("password")
            }
        })
    },

    clickConnect() {
        return cy.get('[id="mini-account-toggle-cta"]').click()
    },
}

export const user = {

    createAccountButton() {
        cy.get('[class="light-button second-button"]')
          .should('have.text', 'Créer mon compte')
          .click();
    },
    connectButton() {
        cy.get('[class="dark-button first-button"]')
          .click()
    },

    enterEmail() {
        cy.get('[name="email"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Email *')
        cy.get('[name="email"]')
          .click()
          .type(Cypress.env("userAccount"))
    },
    enterPassword() {
        cy.get('[name="password"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Mot de passe *')
        cy.get('[name="password"]')
          .click()
          .type(Cypress.env("passAccount"))
    },
    reEnterPassword() {
        cy.get('[name="passwordConf"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Répéter le mot de passe *')
        cy.get('[name="passwordConf"]')
          .click()
          .type(Cypress.env("passAccount"))
    },
    clickOnCreate() {
        cy.get('[id="accept"]')
           .check()
        cy.get('input[type=submit]')
          .click({multiple: true})
    },

    fillEmail() {
        cy.get('[name="connectEmail"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Adresse email *')
        cy.get('[name="connectEmail"]')
          .click()
          .type(Cypress.env("userAccount"))
    },

    fillPassword() {
        cy.get('[name="connectPassword"]')
          .invoke('attr', 'placeholder')
          .should('contain', 'Mot de passe *')
        cy.get('[name="connectPassword"]')
          .click()
          .type(Cypress.env("passAccount"))
    },

    keepConnect() {
        cy.get('[id="keep-connection"]')
          .should('not.be.checked')
        //  .check()
    },

    submit() {
        cy.get('[id="submit-form"]')
          .should('be.visible')
          .click()
    },

    fillInformations() {
        cy.get('[name="lastName"]')
          .click()
          .type('DIALLO')
    }
}

export const usersJson = {
    enterJsonMail() {
        return cy.get('[name="email"]').type(this.data.email)
    }
}