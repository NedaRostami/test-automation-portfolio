// cypress/e2e/cart/add-item.cy.js
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';

const loginPage = new LoginPage();
const inv = new InventoryPage();

describe('Cart: add and remove item (data_test)', () => {
  it('adds and removes "sauce-labs-backpack"', () => {
    const data_test = 'sauce-labs-backpack';

    // لاگین
    loginPage.login('standard_user', 'secret_sauce');

    // اطمینان از صفحه محصولات
    inv.assertListed();

    // اضافه‌کردن با data-test
    inv.addBySlug(data_test);

    // بَج باید 1 شود
    cy.get('.shopping_cart_badge').should('contain', '1');

    // رفتن به سبد
    inv.openCart();
    cy.url().should('include', '/cart.html');

    // حذف همان آیتم با data-test
    cy.dt(`remove-${data_test}`).click();

    // سبد باید خالی باشد
    cy.get('.cart_item').should('have.length', 0);
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});
