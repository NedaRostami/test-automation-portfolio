// cypress/e2e/cart/checkout-path.cy.js
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

const loginPage = new LoginPage();
const inv = new InventoryPage();

describe('Cart: checkout path', () => {
  it('navigates to checkout step one after adding an item', () => {
    // محصول دوم برای تنوع
    const slug = 'sauce-labs-bike-light';

    loginPage.login('standard_user', 'secret_sauce');
    inv.assertListed();

    inv.addBySlug(slug);
    cy.get('.shopping_cart_badge').should('contain', '1');

    inv.openCart();
    cy.dt('checkout').click();

    cy.url().should('include', 'checkout-step-one.html');
    cy.dt('firstName').should('be.visible');
    cy.dt('lastName').should('be.visible');
    cy.dt('postalCode').should('be.visible');
  });
});
