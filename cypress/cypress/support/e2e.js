import '@shelex/cypress-allure-plugin';
import './command'
Cypress.Commands.add('dt', (value) => cy.get(`[data-test="${value}"]`));

// ci trigger

// ci trigger
