import '@shelex/cypress-allure-plugin';

// انتخابگر پایدار بر اساس data-test
Cypress.Commands.add('dt', (value) => cy.get(`[data-test="${value}"]`));

// اگر لاگین تکراری می‌کنی و نمی‌خوای از PageObject استفاده کنی، می‌تونی این رو هم داشته باشی.
// ولی فعلاً PageObject داریم، پس اختیاریه:
// Cypress.Commands.add('loginStandard', () => {
//   cy.visit('/');
//   cy.dt('username').type('standard_user');
//   cy.dt('password').type('secret_sauce', { log: false });
//   cy.dt('login-button').click();
// });
