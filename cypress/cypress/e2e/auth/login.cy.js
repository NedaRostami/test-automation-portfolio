import { LoginPage } from '../../pages/login.page';
const loginPage = new LoginPage();

describe('Auth', () => {
  it('logs in with valid user', () => {
    loginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.contains('Products').should('be.visible');
  });

 
});
