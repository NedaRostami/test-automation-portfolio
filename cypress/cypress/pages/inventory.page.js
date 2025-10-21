// cypress/pages/inventory.page.js

export class InventoryPage {
  // مطمئن شو صفحه محصولات لود شده
  assertListed() {
    cy.contains('Products').should('be.visible');
    cy.url().should('include', '/inventory.html');
  }

  // اضافه‌کردن محصول بر اساس slug
  // مثال slug: 'sauce-labs-backpack' یا 'sauce-labs-bike-light'
  addBySlug(data_test) {
    cy.dt(`add-to-cart-${data_test}`).click();
  }

  // حذف محصول از cart بر اساس slug
  removeBySlug(data_test) {
    cy.dt(`remove-${sauce-labs-backpack}`).click();
  }

  // باز کردن صفحه سبد خرید
  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}
