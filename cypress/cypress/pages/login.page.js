export class LoginPage {
  visit() { cy.visit('/'); }
  username() { return cy.get('[data-test="username"]'); }
  password() { return cy.get('[data-test="password"]'); }
  submit() { return cy.get('[data-test="login-button"]'); }
  error() { return cy.get('[data-test="error"]'); }

  login(u, p) {
    this.visit();
    if (u!==undefined) this.username().type(u);
    if (p!==undefined) this.password().type(p);
    this.submit().click();
  }
  assertErrorContains(text) {
     this.error().should('contain.text', text); }
}
